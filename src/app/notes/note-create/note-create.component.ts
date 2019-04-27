import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-note-create',
  templateUrl: './note-create.component.html',
  styleUrls: ['./note-create.component.sass']
})
export class NoteCreateComponent implements OnInit {

  creationForm: FormGroup;

  constructor(private fb: FormBuilder, private noteService: NotesService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.creationForm = this.fb.group({
      title: '',
      content: '',
    });
  }

  createNote() {
    if (this.creationForm.valid) {
      this.noteService.send(this.creationForm.value)
      .subscribe(data => this.handleSuccess(data), error => this.handleError(error));
    }
  }

  handleSuccess(data) {
    console.log('ok post created', data);
  }
  handleError(error) {
    console.error('ko post not created', error);
  }

}
