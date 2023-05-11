import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SideBarComponent } from './components/menus/side-bar/side-bar.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatDialogModule } from '@angular/material/dialog';
//import { Mat } from '@angular/material/form-field'

import { SiteHeaderComponent } from './components/menus/site-header/site-header.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
import { StatisticsGridComponent } from './components/statistics-grid/statistics-grid.component';
import { FleetListComponent } from './components/statistics-grid/stat-cards/fleet-list/fleet-list.component';
import { BearerDialogComponent } from './components/dialogs/bearer-dialog/bearer-dialog.component';

var AngularModules = [
	BrowserModule,
	AppRoutingModule,
	BrowserAnimationsModule,
	HttpClientModule,
	FormsModule
]

var MaterialComponents = [
	MatCardModule,
	MatButtonModule,
	MatSlideToggleModule,
	MatIconModule,
	MatSidenavModule,
	MatFormFieldModule,
	MatDialogModule
];

var MenuComponents = [
	SideBarComponent
];

@NgModule({
  declarations: [
    AppComponent,
		MenuComponents,
		SiteHeaderComponent,
  	WelcomeCardComponent,
   	StatisticsGridComponent,
   	FleetListComponent,
   	BearerDialogComponent
  ],
  imports: [
    AngularModules,
		MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
