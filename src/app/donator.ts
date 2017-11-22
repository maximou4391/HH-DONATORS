import {Idonator} from './idonator';

export class Donator /*implements Idonator*/ {
  firstName: string;
  familyName: string;
  town: string;

  constructor(firstName: string, familyName: string, town) {
    this.firstName = firstName;
    this.familyName = familyName;
    this.town = town;
    // this.addDonatorToDatabase();
  }
}
