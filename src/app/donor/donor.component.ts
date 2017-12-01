import {Component, Input, OnInit} from '@angular/core';
import {IDonor} from '../donor.interface';
import {AddDonorDialogComponent} from '../add-donor-dialog/add-donor-dialog.component';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
import {MatDialog} from '@angular/material';
import {Donation} from '../donation';
import {AddDonationDialogComponent} from '../add-donation-dialog/add-donation-dialog.component';
import {Observable} from 'rxjs/Observable';
import {IDonation} from '../donation.interface';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  @Input() donor: IDonor;

  private donationsCollection: AngularFirestoreCollection<IDonation>;
  donations: Observable<IDonation[]>;

  constructor(private readonly afs: AngularFirestore, public dialog: MatDialog) {
  }

  /**
   * Use the donor id only after on init otherwise it won't be defined
   */
  ngOnInit() {
    this.donationsCollection = this.afs.collection<IDonation>('donors/' + this.donor.id + '/donations');
    this.donations = this.donationsCollection.snapshotChanges()
      .map(actions => {
        return actions.map(action => (<IDonation> {
          id: action.payload.doc.id,
          parent: action.payload.doc.ref.parent, ...action.payload.doc.data()
        }));
      });
  }

  /**
   * Update existing donor
   * @param {IDonor} donorToUpdate
   */
  updateDonor(donorToUpdate: IDonor) {
    const donorToUpdateDocumentObject: AngularFirestoreDocument<IDonor>
      = this.afs.doc<IDonor>('donors/' + donorToUpdate.id);
    const dialogRef = this.dialog.open(AddDonorDialogComponent, {
      data: donorToUpdate,
    });
    dialogRef.afterClosed().subscribe(donor => {
      donorToUpdateDocumentObject.update(donor);
    });
  }

  /**
   * Delete a donor thanks to its id
   * @param {IDonor} donorToDelete
   */
  deleteDonor(donorToDelete: IDonor) {
    const donorToDeleteDocumentObject: AngularFirestoreDocument<IDonor>
      = this.afs.doc<IDonor>('donors/' + donorToDelete.id);
    donorToDeleteDocumentObject.delete();
  }

  /**
   * Add a donation for this donor
   * @param {IDonor} donor
   */
  addDonation() {
    const newDonation = new Donation();
    const dialogRef = this.dialog.open(AddDonationDialogComponent, {
      data: {donor: this, newDonation: newDonation},
    });
    dialogRef.afterClosed().subscribe(result => {
      this.donationsCollection.add(newDonation.toObject());
    });
  }
}
