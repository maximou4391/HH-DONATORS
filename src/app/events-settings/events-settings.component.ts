import {Component, OnInit} from '@angular/core';
import {
  trigger,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-events-settings',
  templateUrl: './events-settings.component.html',
  styleUrls: ['./events-settings.component.css'],
  animations: [
    trigger('fadeInAnimation', [
      // route 'enter' transition
      transition(':enter', [

        // styles at start of transition
        style({opacity: 0}),

        // animation and styles at end of transition
        animate('.4s', style({opacity: 1}))
      ]),
    ])
  ]

})
export class EventsSettingsComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
