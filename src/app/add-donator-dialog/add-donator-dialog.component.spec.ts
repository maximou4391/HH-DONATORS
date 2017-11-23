import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonatorDialogComponent } from './add-donator-dialog.component';

describe('AddDonatorDialogComponent', () => {
  let component: AddDonatorDialogComponent;
  let fixture: ComponentFixture<AddDonatorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonatorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonatorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
