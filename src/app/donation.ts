import {GenericObject} from './generic-object';
import {IDonation} from './donation.interface';

export class Donation extends GenericObject implements IDonation {
  amount: number;
  date: Date = new Date();
}
