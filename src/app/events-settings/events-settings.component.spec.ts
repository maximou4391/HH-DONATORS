import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSettingsComponent } from './events-settings.component';

describe('EventsSettingsComponent', () => {
  let component: EventsSettingsComponent;
  let fixture: ComponentFixture<EventsSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
