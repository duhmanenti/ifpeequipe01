import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MarcosgabrielComponent } from './marcosgabriel/marcosgabriel.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcosgabrielComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
