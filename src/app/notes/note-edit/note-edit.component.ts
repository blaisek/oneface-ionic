import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';
import { NoteInterface } from '../model/note-interface';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.sass']
})
export class NoteEditComponent implements OnInit {

  public note$: Observable<NoteInterface>;

  constructor(
    private _noteService: NotesService,
    private _route: ActivatedRoute
  ) { }

  async ngOnInit() {
    const { id } = this._route.snapshot.params;
    console.log('id->', id);
    this._noteService.load();
    this.note$ = await this._noteService.getById(id);
  }

  update(note) {
    const { id } = this._route.snapshot.params;
    this._noteService.updateById(id, note);
  }

}
