import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-add-donator-dialog',
  templateUrl: './add-donator-dialog.component.html',
  styleUrls: ['./add-donator-dialog.component.css']
})
export class AddDonatorDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddDonatorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

}
