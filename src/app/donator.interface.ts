import {IDonation} from './donation.interface';
import {AngularFirestoreCollection} from 'angularfire2/firestore';

export interface IDonator {
  id?: string;
  firstName: string;
  familyName: string;
  town: string;
  donationsCollection: AngularFirestoreCollection<IDonator>;
}
