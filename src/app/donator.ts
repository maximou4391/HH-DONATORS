import {IDonator} from './donator.interface';
import {GenericObject} from './generic-object';

export class Donator extends GenericObject implements IDonator {
  firstName = '';
  familyName = '';
  town = '';

}
