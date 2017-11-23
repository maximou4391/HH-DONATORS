import {Idonator} from './idonator';
import {AngularFirestore} from 'angularfire2/firestore';

export class Donator /*implements Idonator*/ {
  firstName: string;
  familyName: string;
  town: string;

  constructor(db: AngularFirestore) {
  }

  save() {

  }

}
