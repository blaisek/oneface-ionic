import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NotesService } from './notes.service';
import { NoteInterface } from './model/note-interface';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.sass']
})
export class NotesComponent implements OnInit {

  notes$: Observable<NoteInterface[]>;

  constructor(
    private _noteService: NotesService
  ) { }

  ngOnInit() {
    this._noteService.load();
    this.notes$  = this._noteService.notes$;
  }

}
