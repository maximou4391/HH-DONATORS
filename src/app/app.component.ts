import {Component} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {saveAs} from 'file-saver';

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
    const url = 'http://www.helpinghands-sophia.org/PDFBUILDER/example.php?name=je%20viens&address=de%20comprendre&city=ton%20petit&phone=tour%20de%passe%20passe';
    // Make the HTTP request:
    this.http.get(url).subscribe(response => {
        // Read the result field from the JSON response.
        // this.results = data['results'];
        const blob = new Blob([response['data']], {type: 'application/pdf'});
        saveAs(blob, 'download.pdf');
      }
    );
  }
}
