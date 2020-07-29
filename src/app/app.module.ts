import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { Todo1Component } from './todo1/todo1.component';
import {ReactiveFormsModule} from '@angular/forms';
import { Page1Component } from './page1/page1.component';
import {Page2Component} from "./page2/page2.component";
import { Page3Component } from './page3/page3.component';

@NgModule({ // модуль1
  declarations: [
    AppComponent,// компанент просто
    Page1Component,
    Page2Component,
    Todo1Component,
    Page1Component,
    Page3Component,

  ],
  imports: [
    BrowserModule, // модуль для блаузера
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]// главный компанент загрузка
})
export class AppModule {

}
