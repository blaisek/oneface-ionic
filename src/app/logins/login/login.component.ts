import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { IdentifiantInterface } from '../model/identifiant-interface';
import { IdentifiersService } from '../identifiers.service';
import { ActivatedRoute } from '@angular/router';
import { tap, take } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  editForm: FormGroup;

  public Identifier$: Observable<IdentifiantInterface>;

  constructor(
    private _IdentifierService: IdentifiersService,
    private _route: ActivatedRoute,
  ) { }
    public Identifier: IdentifiantInterface;

  async ngOnInit() {
    const { id } = this._route.snapshot.params;
    console.log('id->', id);
    this.buildForm();
    this._IdentifierService.load();
    this.Identifier$ = await this._IdentifierService.getById(id).pipe(
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
      userName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
      ,
      password: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
      ,
      webSiteUrl: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });
  }
  delete() {
    const { id } = this._route.snapshot.params;
    // console.log('del', id);
    this._IdentifierService.delById(id);
  }

  update() {

    const { id } = this._route.snapshot.params;
    // console.log('snapshot', this._route.snapshot.params);
    console.log('update', this.editForm.value);
    this._IdentifierService.updateById(id, this.editForm.value).pipe(take(1)).toPromise().catch(err => err);
}
}
