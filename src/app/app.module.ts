import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardMdImage, MatCardModule, MatChipsModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
 import {HttpClientModule} from '@angular/common/http';
import { DonatorComponent } from './donator/donator.component';

@NgModule({
  declarations: [
    AppComponent,
    DonatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
