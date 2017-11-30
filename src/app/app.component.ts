import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';
import 'rxjs/add/observable/zip';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {AddDonatorDialogComponent} from './add-donator-dialog/add-donator-dialog.component';
import {MatDialog} from '@angular/material';
import {Donator} from './donator';
import {IDonator} from './donator.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private donatorsCollection: AngularFirestoreCollection<IDonator>;
  donators: Observable<IDonator[]>;

  constructor(private readonly afs: AngularFirestore,
              private http: HttpClient,
              public dialog: MatDialog) {
    this.donatorsCollection = afs.collection<IDonator>('donators');
    // this.donators = this.donatorsCollection.valueChanges();

    // This is used to add id when retrieving the data
    this.donators = this.donatorsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => (<IDonator> {id: action.payload.doc.id, ...action.payload.doc.data()}));
      });

  }

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
   * Open the dialog to add a donator
   */
  addDonators() {
    const newDonator = new Donator();
    const dialogRef = this.dialog.open(AddDonatorDialogComponent, {
      data: newDonator,
    });

    dialogRef.afterClosed().subscribe(donator => {
      // Persist a document id
      console.log(donator);
      this.donatorsCollection.add(donator.toObject());
    });
  }

  updateDonator(donatorToUpdate: IDonator) {
    const donatorToUpdateDocumentObject: AngularFirestoreDocument<IDonator>
      = this.afs.doc<IDonator>('donators/' + donatorToUpdate.id);

    const firstName: string = donatorToUpdate.firstName;
    const familyName: string = donatorToUpdate.familyName;
    const town: string = '';
    const dialogRef = this.dialog.open(AddDonatorDialogComponent, {
      data: {
        firstName: firstName,
        familyName: familyName,
        town: town
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      // Persist a document id
      const newDonator: IDonator = {
        firstName: result.firstName,
        familyName: result.familyName,
        town: result.town
      };
      this.donatorsCollection.add(newDonator);
    });


    // donatorToUpdateDocumentObject.update()
  }

  deleteDonator(donatorToDelete: IDonator) {
    const donatorToDeleteDocumentObject: AngularFirestoreDocument<IDonator>
      = this.afs.doc<IDonator>('donators/' + donatorToDelete.id);
    donatorToDeleteDocumentObject.delete();
  }
}
