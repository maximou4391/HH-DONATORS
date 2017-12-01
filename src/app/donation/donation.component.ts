import {Component, Input, OnInit} from '@angular/core';
import {IDonation} from '../donation.interface';
import {IDonor} from '../donor.interface';
import {AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css']
})
export class DonationComponent implements OnInit {

  @Input() donation: IDonation;

  constructor(private readonly afs: AngularFirestore) { }

  ngOnInit() {
    console.log('donation', this.donation);
  }

  deleteDonation(donationToDelete: IDonation) {
    const donationToDeleteDocumentObject: AngularFirestoreDocument<IDonation>
      = this.afs.doc<IDonation>('donors/' + this.donation.parent.parent.id + '/donations/' + donationToDelete.id);
    donationToDeleteDocumentObject.delete();
  }


}
