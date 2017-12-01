import {IDonor} from './donor.interface';
import {GenericObject} from './generic-object';
import {IDonation} from './donation.interface';
import {AngularFirestoreCollection} from 'angularfire2/firestore';

export class Donor extends GenericObject implements IDonor {
  firstName = '';
  familyName = '';
  town = '';
  donationsCollection: AngularFirestoreCollection<IDonation>;
}
