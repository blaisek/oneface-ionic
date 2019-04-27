import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginEditComponent } from './login-edit.component';

describe('LoginEditComponent', () => {
  let component: LoginEditComponent;
  let fixture: ComponentFixture<LoginEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
