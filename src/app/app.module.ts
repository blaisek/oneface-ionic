import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesComponent } from './notes/notes.component';
import { LoginsComponent } from './logins/logins.component';
import { NoteCreateComponent } from './notes/note-create/note-create.component';
import { NoteComponent } from './notes/note/note.component';
import { LoginCreateComponent } from './logins/login-create/login-create.component';
import { LoginComponent } from './logins/login/login.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

import { ToastrModule } from 'ngx-toastr';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NotesComponent,
    LoginsComponent,
    NoteCreateComponent,
    NoteComponent,
    LoginCreateComponent,
    LoginComponent,
    LoginpageComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
