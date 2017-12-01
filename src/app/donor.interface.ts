import {IDonation} from './donation.interface';
import {AngularFirestoreCollection} from 'angularfire2/firestore';

export interface IDonor {
  id?: string;
  firstName: string;
  familyName: string;
  town: string;
  donationsCollection: AngularFirestoreCollection<IDonation>;
}
