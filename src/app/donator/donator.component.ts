import {Component, Input, OnInit} from '@angular/core';
import {Donator} from '../donator';

@Component({
  selector: 'app-donator',
  templateUrl: './donator.component.html',
  styleUrls: ['./donator.component.css']
})
export class DonatorComponent implements OnInit {

  @Input() donator: Donator;

  constructor() { }

  ngOnInit() {
  }

}
