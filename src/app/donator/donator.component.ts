import {Component, Input, OnInit} from '@angular/core';
import {IDonator} from '../donator.interface';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {

  @Input() donator: IDonator;

  constructor() { }

  ngOnInit() {
  }

}
