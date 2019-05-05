import { Injectable } from '@angular/core';
import { IdentifiantInterface } from './model/identifiant-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdentifiersService {

  private _identifiers$: BehaviorSubject<IdentifiantInterface[]> = new BehaviorSubject(null);
  public identifiers$ = this._identifiers$.asObservable();
  public url = 'http://0.0.0.0:8080/api/identifiers'; // remplacer par api prod
  constructor(private http: HttpClient, public navCtrl: NavController) {
  }

  load() {
    if (this._identifiers$.getValue()) {
      console.log('getValue', this._identifiers$.getValue());
      return;
    }

    this.http.get(this.url)
    // .pipe(
    //   tap( data => console.log(data))
    // )
    .subscribe((data: {identifiers: IdentifiantInterface[]}) => this._identifiers$.next(data.identifiers));
  }

  send(Identifier: IdentifiantInterface) {

    return this.http.post<IdentifiantInterface>(this.url, Identifier);
  }

  getById(id: any): Observable<IdentifiantInterface> {
    return this.identifiers$.pipe(
      map(identifiers => (identifiers || []).filter(n => n._id === id).shift())
    );
  }

  delById(id: string) {
    // delete method
    this.http.delete(this.url + '/' + id).toPromise()
      .then(_ => this.navCtrl.navigateRoot('dashboard/identifiers'))
      .catch(err => err);
  }

  updateById(id: string, Identifier: IdentifiantInterface) {
    // put method
    return this.http.put(this.url + '/' + id, Identifier);


 }

}
