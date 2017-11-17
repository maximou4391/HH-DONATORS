import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as JSZip from 'jszip';
import {saveAs} from 'file-saver';
import {ResponseContentType} from '@angular/http';
import {HttpParams} from '@angular/common/http/src/params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private http: HttpClient) {
  }

  downloadAll() {
    const url = 'http://www.helpinghands-sophia.org/PDFBUILDER/example.php?name=je%'
      + '20viens&address=de%20comprendre&city=ton%20petit&phone=tour%20de%passe%20passe';
    // Make the HTTP request:

    // const zip = new JSZip();
    // zip.file(url);
    // zip.generateAsync({type: 'blob'})
    //   .then(function (content) {
    //     // see FileSaver.js
    //     saveAs(content, 'example.zip');
    //   });

    console.log('toto');

    const headers = new HttpHeaders().set('Content-Type', 'application/pdf');

    this.http.get(url, {headers, responseType: 'arraybuffer'}).subscribe(response => {
        console.log('tutu', response);
        const blob = new Blob([response], {type: 'application/pdf'});
        saveAs(blob, 'download.pdf');
      }
    );
  }
}
