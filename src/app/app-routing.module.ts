import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { LoginsComponent } from './logins/logins.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteComponent } from './notes/note/note.component';
import { NoteEditComponent } from './notes/note-edit/note-edit.component';
import { LoginCreateComponent } from './logins/login-create/login-create.component';
import { LoginComponent } from './logins/login/login.component';
import { LoginEditComponent } from './logins/login-edit/login-edit.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [

{path: '', component: LoginpageComponent},
{path: 'dashboard', children: [
  {path: '', component: DashboardComponent}
,
{path: 'notes', children: [
  {path: '', component: NotesComponent},
  {path: 'create', component: NoteCreateComponent},
  {path: ':id', children: [
    {path: '', component: NoteComponent},
    {path: 'edit', component: NoteEditComponent},
  ]},
]},
{path: 'logins', children: [
  {path: '', component: LoginsComponent },
  {path: 'create', component: LoginCreateComponent },
  {path: ':id', children: [
    {path: '', component: LoginComponent},
    {path: 'edit', component: LoginEditComponent }
  ]}
] }
] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
