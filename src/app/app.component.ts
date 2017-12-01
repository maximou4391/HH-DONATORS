import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';
import 'rxjs/add/observable/zip';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AddDonorDialogComponent} from './add-donor-dialog/add-donor-dialog.component';
import {MatDialog} from '@angular/material';
import {Donor} from './donor';
import {IDonor} from './donor.interface';
import {Donation} from './donation';
import {AddDonationDialogComponent} from './add-donation-dialog/add-donation-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private donorsCollection: AngularFirestoreCollection<IDonor>;
  donors: Observable<IDonor[]>;

  constructor(private readonly afs: AngularFirestore,
              private http: HttpClient,
              public dialog: MatDialog) {
    this.donorsCollection = afs.collection<IDonor>('donors');
    // this.donors = this.donorsCollection.valueChanges();

    // This is used to add id when retrieving the data
    this.donors = this.donorsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => (<IDonor> {id: action.payload.doc.id, ...action.payload.doc.data()}));
      });
  }

  /**
   * Download all the PDF for each donator
   */
  downloadAll() {
    const url = 'http://www.helpinghands-sophia.org/PDFBUILDER/example.php?name=je%'
      + '20viens&address=de%20comprendre&city=ton%20petit&phone=tour%20de%passe%20passe';

    const url2 = 'http://www.helpinghands-sophia.org/PDFBUILDER/example.php?name=toto'
      + '&address=youhou&city=antibes&phone=0687982591';
    // Make the HTTP request:

    const zipp = new JSZip();

    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');

    const promise1: Observable<ArrayBuffer>
      = this.http.get(url, {headers, responseType: 'arraybuffer'});

    const promise2: Observable<ArrayBuffer>
      = this.http.get(url2, {headers, responseType: 'arraybuffer'});

    const example = Observable
      .zip(
        promise1,
        promise2
      );

    example.subscribe(responses => {
      console.log('responses', responses);
      for (let i = 0; i < responses.length; i++) {
        const blob = new Blob([responses[i]], {type: 'application/pdf'});
        // saveAs(blob, 'tt.pdf');
        zipp.file('tt' + i + '.pdf', blob);
      }
      zipp.generateAsync({type: 'blob'})
        .then(function (content) {
          // see FileSaver.js
          saveAs(content, 'ettt.zip');
        });
    })
  }

  /**
   * Open the dialog to add a donor
   */
  addDonor() {
    const newDonor = new Donor();
    const dialogRef = this.dialog.open(AddDonorDialogComponent, {
      data: newDonor,
    });
    dialogRef.afterClosed().subscribe(donor => {
      this.donorsCollection.add(donor.toObject());
    });
  }

}
