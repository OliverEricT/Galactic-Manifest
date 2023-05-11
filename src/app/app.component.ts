import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BearerDialogComponent } from './components/dialogs/bearer-dialog/bearer-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Galactic Manifest';

	private bearer = JSON.parse(localStorage.getItem('Bearer') ?? '{ }');
	private token = this.bearer?.token;

	constructor(public dialog: MatDialog) {};

	ngOnInit(): void {
		console.log(this.bearer?.token);
		if (this.bearer?.token === undefined){
			console.log("I'm in ya");
			this.openDialog();
		}
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(BearerDialogComponent, {
      width: '250px',
      data: {token: this.token},
			disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.token = result;
			localStorage.setItem('Bearer',JSON.stringify({ token: this.token}))
			window.location.reload();
    });
	}
	
	resetToken(): void {
		this.token = undefined;
		localStorage.removeItem('Bearer');
		window.location.reload();
	}
}
