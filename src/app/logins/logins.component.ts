import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IdentifiantInterface } from './model/identifiant-interface';
import { IdentifiersService } from './identifiers.service';

@Component({
  selector: 'app-logins',
  templateUrl: './logins.component.html',
  styleUrls: ['./logins.component.sass']
})
export class LoginsComponent implements OnInit {

  identifiers$: Observable<IdentifiantInterface[]>;

  constructor(
    private _identifierService: IdentifiersService
  ) { }

  ngOnInit() {

    this._identifierService.load();
    this.identifiers$ = this._identifierService.identifiers$;

  }

}
