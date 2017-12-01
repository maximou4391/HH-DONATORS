import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonationDialogComponent } from './add-donation-dialog.component';

describe('AddDonationDialogComponent', () => {
  let component: AddDonationDialogComponent;
  let fixture: ComponentFixture<AddDonationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
