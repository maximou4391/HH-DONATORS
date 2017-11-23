import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardMdImage, MatCardModule, MatChipsModule, MatDialogModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule
} from '@angular/material';
 import {HttpClientModule} from '@angular/common/http';
import { DonatorComponent } from './donator/donator.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { AddDonatorDialogComponent } from './add-donator-dialog/add-donator-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DonatorComponent,
    AddDonatorDialogComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFirestoreModule,
    MatDialogModule,
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
  bootstrap: [AppComponent],
  entryComponents: [AddDonatorDialogComponent]
})
export class AppModule { }
