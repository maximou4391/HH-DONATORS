import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';
import 'rxjs/add/observable/zip';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore} from 'angularfire2/firestore';
import {AddDonatorDialogComponent} from './add-donator-dialog/add-donator-dialog.component';
import {MatDialog} from '@angular/material';
import {Donator} from './donator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  totos: Observable<any[]>;

  db: AngularFirestore;

  constructor(private http: HttpClient, db: AngularFirestore, public dialog: MatDialog) {
    this.totos = db.collection('totos').valueChanges();
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

  addDonators() {
    let newDonator: Donator = new Donator(this.db);

    let dialogRef = this.dialog.open(AddDonatorDialogComponent, {
      width: '250px',
      data: {newDonator: newDonator}
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   this.animal = result;
    // });
  }
}
}
