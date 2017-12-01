import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule, MatChipsModule, MatFormFieldModule, MatDialogModule, MatIconModule, MatMenuModule, MatSidenavModule,
  MatToolbarModule, MatInputModule, MatDatepicker, MatDatepickerModule, MatNativeDateModule
} from '@angular/material';
 import {HttpClientModule} from '@angular/common/http';
import { DonorComponent } from './donor/donor.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { AddDonorDialogComponent } from './add-donor-dialog/add-donor-dialog.component';
import {FormsModule} from '@angular/forms';
import { AddDonationDialogComponent } from './add-donation-dialog/add-donation-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DonorComponent,
    AddDonorDialogComponent,
    AddDonationDialogComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
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
  entryComponents: [AddDonorDialogComponent, AddDonationDialogComponent]
})
export class AppModule { }
