import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-donation-dialog',
  templateUrl: './add-donation-dialog.component.html',
  styleUrls: ['./add-donation-dialog.component.css']
})
export class AddDonationDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<AddDonationDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
