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
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DonatorComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
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
