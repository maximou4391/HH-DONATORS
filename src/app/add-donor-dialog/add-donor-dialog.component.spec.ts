import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonorDialogComponent } from './add-donor-dialog.component';

describe('AddDonorDialogComponent', () => {
  let component: AddDonorDialogComponent;
  let fixture: ComponentFixture<AddDonorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDonorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
