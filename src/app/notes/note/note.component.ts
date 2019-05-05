import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteInterface } from '../model/note-interface';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { pipe } from '@angular/core/src/render3';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

  editForm: FormGroup;

  public note$: Observable<NoteInterface>;

  constructor(
    private _noteService: NotesService,
    private _route: ActivatedRoute,
  ) { }
    public note: NoteInterface;

  async ngOnInit() {
    const { id } = this._route.snapshot.params;
    console.log('id->', id);
    this.buildForm();
    this._noteService.load();
    this.note$ = await this._noteService.getById(id).pipe(
      tap(data => {
        this.editForm.patchValue(data);
      })
    );
  }

  buildForm() {
    this.editForm = new FormGroup({
      title: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      content: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  delete() {
    const { id } = this._route.snapshot.params;
    // console.log('del', id);
    this._noteService.delById(id);
  }

  update() {

    const { id } = this._route.snapshot.params;
    // console.log('snapshot', this._route.snapshot.params);
    console.log('update', this.editForm.value);
    this._noteService.updateById(id, this.editForm.value).pipe(take(1)).toPromise().catch(err => err);
}
}
