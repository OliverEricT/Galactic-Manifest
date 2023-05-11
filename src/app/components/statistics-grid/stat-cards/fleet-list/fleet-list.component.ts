import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/objects/ship/ship';
import { ShipService } from 'src/app/services/ship/ship.service';

@Component({
  selector: 'app-fleet-list',
  templateUrl: './fleet-list.component.html',
  styleUrls: ['./fleet-list.component.scss']
})
export class FleetListComponent implements OnInit{

	public fleet: Ship[] = [] as Ship[];

	constructor(private shipService: ShipService) {}

	ngOnInit(): void {
		this.getFleet();
	}

	getFleet(): void {
		this.shipService.getMyShips().subscribe(ships => this.fleet = ships);
	}
}
