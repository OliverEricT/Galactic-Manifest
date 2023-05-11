import { Component, OnInit } from '@angular/core';
import { Ship } from 'src/app/objects/ship/ship';
import { ShipService } from 'src/app/services/ship/ship.service';

@Component({
  selector: 'app-fleet-grid',
  templateUrl: './fleet-grid.component.html',
  styleUrls: ['./fleet-grid.component.scss']
})
export class FleetGridComponent implements OnInit{

	public fleet: Ship[] = [] as Ship[];

	constructor(private shipService: ShipService) {}

	ngOnInit(): void {
		this.getFleet();
	}

	getFleet(): void {
		this.shipService.getMyShips().subscribe(ships => this.fleet = ships);
	}
}
