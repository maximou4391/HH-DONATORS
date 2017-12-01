import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-donor-dialog',
  templateUrl: './add-donor-dialog.component.html',
  styleUrls: ['./add-donor-dialog.component.css']
})
export class AddDonorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDonorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
