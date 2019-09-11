import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClaraLarissaComponent } from './clara-larissa/clara-larissa.component';

@NgModule({
  declarations: [
    AppComponent,
    ClaraLarissaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
