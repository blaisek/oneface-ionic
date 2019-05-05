import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, map, filter } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { NoteInterface } from './model/note-interface';
import { NavController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  // tslint:disable-next-line:variable-name
  private _notes$: BehaviorSubject<NoteInterface[]>  = new BehaviorSubject(null);
  public notes$ = this._notes$.asObservable();
  public url = 'http://0.0.0.0:8080/api/notes'; // remplacer par api prod
  constructor(private http: HttpClient, public navCtrl: NavController) {
  }

  load() {
    if (this._notes$.getValue()) {
      console.log('getValue', this._notes$.getValue());
      return;
    }

    this.http.get(this.url)
    // .pipe(
    //   tap( data => console.log(data))
    // )
    .subscribe((data: {notes: NoteInterface[]}) => this._notes$.next(data.notes));
  }

  send(note: NoteInterface) {

    return this.http.post<NoteInterface>(this.url, note);
  }

  getById(id: string): Observable<NoteInterface> {
    return this.notes$.pipe(
      map(notes => (notes || []).filter(n => n._id === id).shift())
    );
  }

  delById(id: string) {
    // delete method
    this.http.delete(this.url + '/' + id).toPromise()
      .then(_ => this.navCtrl.navigateRoot('dashboard/notes'))
      .catch(err => err);
  }

  updateById(id: string, note: NoteInterface) {

    // put method

    return this.http.put(this.url + '/' + id, note);

  }

}


