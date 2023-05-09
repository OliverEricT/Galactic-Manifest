import { Component, Input } from '@angular/core';
import { AppComponent } from '../../../app.component'

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.scss']
})

export class SiteHeaderComponent {
	@Input() siteTitle?: string;
}
