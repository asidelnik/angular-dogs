// import { mat-checkboxModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';


import { AppComponent } from './app.component';
import { AddDogComponent } from './add-dog/add-dog.component';
import { AddOwnerComponent } from './add-owner/add-owner.component';


@NgModule({
   declarations: [
      AppComponent,
      AddDogComponent,
      AddOwnerComponent
      ],
   imports: [
      BrowserModule,
      MatToolbarModule,
      FormsModule,
      MatInputModule,
      BrowserAnimationsModule,
      MatCheckboxModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }

//providers: [{ provide: MAT_CHECKBOX_CLICK_ACTION, useValue: 'check' }],
// exports: [BrowserModule],
// providers: [BrowserAnimationsModule],
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';