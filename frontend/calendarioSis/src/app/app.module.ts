import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarioListarComponent } from './calendarios/calendario-listar.component';
import { HttpClientModule } from '@angular/common/http';
import { CalendarioFormComponent } from './calendarios/calendario-form/calendario-form.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { LoginFormComponent } from './login/login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarioListarComponent,
    CalendarioFormComponent,
    LoginComponent,
    LoginFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
