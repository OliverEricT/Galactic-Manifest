import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { SideBarComponent } from './components/menus/side-bar/side-bar.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SiteHeaderComponent } from './components/menus/site-header/site-header.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';

var MaterialComponents = [
	MatCardModule,
	MatButtonModule,
	MatSlideToggleModule,
	MatIconModule,
	MatSidenavModule
];

var MenuComponents = [
	SideBarComponent
];

@NgModule({
  declarations: [
    AppComponent,
		MenuComponents,
		SiteHeaderComponent,
  	WelcomeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
		BrowserAnimationsModule,
		MaterialComponents
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
