import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IdentifiersService } from '../identifiers.service';

@Component({
  selector: 'app-login-create',
  templateUrl: './login-create.component.html',
  styleUrls: ['./login-create.component.sass']
})
export class LoginCreateComponent implements OnInit {

  creationForm: FormGroup;

  constructor(private fb: FormBuilder, private identifierService: IdentifiersService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.creationForm = this.fb.group({
      title: '',
      userName: '',
      password: '',
      webSiteUrl: ''
    });
  }

  createNote() {
    if (this.creationForm.valid) {
      this.identifierService.send(this.creationForm.value)
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
