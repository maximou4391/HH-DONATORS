import {Pipe, PipeTransform} from '@angular/core';
import {Donor} from './donor';

@Pipe({
  name: 'donatorFilter'
})
export class DonatorFilterPipe implements PipeTransform {

  transform(donors: Donor[], enteredText: String): any {
    if (!donors) {
      return [];
    }
    if (!enteredText) {
      return donors.sort((a, b) => this.byName(a, b));
    }
    const searchTextLowerCase: string = enteredText.toLowerCase();
    return donors.filter(donor => {
      return donor.firstName.toLowerCase().includes(searchTextLowerCase) || donor.familyName.toLowerCase().includes(searchTextLowerCase);
      // console.log();
    }).sort((a, b) => this.byName(a, b));
  }

  /**
   * Sort by name
   * @param {Donor} donorA
   * @param {Donor} donorB
   * @returns {number}
   */
  byName(donorA: Donor, donorB: Donor) {
    const familyNameA = donorA.familyName.toUpperCase();
    const familyNameB = donorB.familyName.toUpperCase();
    if (familyNameA < familyNameB) {
      return -1;
    }
    if (familyNameA > familyNameB) {
      return 1;
    }
    return 0;
  }
}
