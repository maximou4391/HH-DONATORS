import {IDonator} from './donator.interface';
import {GenericObject} from './generic-object';
import {IDonation} from './donation.interface';
import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable} from 'rxjs/Observable';

export class Donator extends GenericObject implements IDonator {
  firstName = '';
  familyName = '';
  town = '';
  donationsCollection: AngularFirestoreCollection<IDonator>;
  donations: Observable<IDonation[]>;
}
