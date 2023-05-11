import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
	token: string;
}

@Component({
  selector: 'app-bearer-dialog',
  templateUrl: './bearer-dialog.component.html',
  styleUrls: ['./bearer-dialog.component.scss']
})
export class BearerDialogComponent {

	public isDisabled: boolean = true;

  constructor(
    public dialogRef: MatDialogRef<BearerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public bearer: DialogData
		) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
