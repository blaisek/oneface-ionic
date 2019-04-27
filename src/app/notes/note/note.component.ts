import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NoteInterface } from '../model/note-interface';
import { NotesService } from '../notes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass']
})
export class NoteComponent implements OnInit {

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

  delete() {
    const { id } = this._route.snapshot.params;
    console.log('del',id);
    this._noteService.delById(id);
  }
}
