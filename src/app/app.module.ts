import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
