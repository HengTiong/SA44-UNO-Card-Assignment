import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { PlayingFieldComponent } from './playing-field.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PlayingFieldComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
