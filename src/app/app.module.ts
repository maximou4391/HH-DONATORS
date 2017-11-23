import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule, MatInputModule
} from '@angular/material';
 import {HttpClientModule} from '@angular/common/http';
import { DonatorComponent } from './donator/donator.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AddDonatorDialogComponent } from './add-donator-dialog/add-donator-dialog.component';
import {FormsModule} from '@angular/forms';

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
    MatInputModule,
    FormsModule,
    MatMenuModule,
    MatFormFieldModule,
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
