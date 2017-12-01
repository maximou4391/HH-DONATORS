import {Component, Input, OnInit} from '@angular/core';
import {IDonor} from '../donor.interface';

@Component({
  selector: 'app-donor',
  templateUrl: './donor.component.html',
  styleUrls: ['./donor.component.css']
})
export class DonorComponent implements OnInit {

  @Input() donor: IDonor;

  constructor() { }

  ngOnInit() {
  }

}
