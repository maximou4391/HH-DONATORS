import {Component, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {IDonor} from '../donor.interface';
import {Observable} from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-donors-list',
  templateUrl: './donors-list.component.html',
  styleUrls: ['./donors-list.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      // route 'enter' transition
      transition(':enter', [

        // styles at start of transition
        style({opacity: 0}),

        // animation and styles at end of transition
        animate('.4s', style({opacity: 1}))
      ]),
    ])
  ]
})
export class DonorsListComponent implements OnInit {
  private donorsCollection: AngularFirestoreCollection<IDonor>;
  donors: Observable<IDonor[]>;

  constructor(private readonly afs: AngularFirestore,
              private http: HttpClient,
              public dialog: MatDialog,
              private router: Router) {
    this.donorsCollection = afs.collection<IDonor>('donors');
    // this.donors = this.donorsCollection.valueChanges();

    // This is used to add id when retrieving the data
    this.donors = this.donorsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => (<IDonor> {id: action.payload.doc.id, ...action.payload.doc.data()}));
      });
  }

  ngOnInit() {
  }

}
