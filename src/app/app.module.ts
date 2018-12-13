import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { coursesComponent } from './courses.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddtopicComponent } from './addtopic/addtopic.component';
const Router: Routes = [
      {path:'' , component:HomeComponent},
      {path:'about' , component:AboutComponent},
      {path:'contact' , component:ContactComponent},
      {path:'login' , component:LoginComponent},
      {path:'register' , component:RegisterComponent},
      {path:'addtopic' , component:AddtopicComponent},
      {path:'**' , component:PagenotfoundComponent}

    ];

@NgModule({
  declarations: [
    AppComponent,
    coursesComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    RegisterComponent,
    AddtopicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(Router)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
