import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpaceTradersUrl } from 'src/globals';
import { Observable, map, tap } from 'rxjs';
import * as secrets from '../../../assets/secrets.json';
import { PagedData } from 'src/app/objects/paged-object/paged-data';
import { Ship } from 'src/app/objects/ship/ship';
import { Cargo } from 'src/app/objects/ship/cargo/cargo';
import { Nav } from 'src/app/objects/nav/nav';

@Injectable({
  providedIn: 'root'
})
export class ShipService {

	private token = secrets;

	private myUrl = 'my/ships';
	private headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${this.token.Bearer}`
	});

  constructor(private http: HttpClient) { }

	getMyShips(): Observable<Ship[]> {
		var fullUrl = `${SpaceTradersUrl}/${this.myUrl}`;
		return this.http.get<PagedData>(fullUrl, { headers: this.headers }).pipe(
			tap(paged => console.log(JSON.stringify(paged.data))),
			map(paged => {
				return paged.data as Ship[];
			})
		);
	}

	postMyShips(shipType: string, waypointSymbol: string): Observable<Ship[]> {
		throw new Error("not Implemented");
	}

	getMyShip(shipSymbol: string): Observable<Ship> {
		var fullUrl = `${SpaceTradersUrl}/${this.myUrl}/${shipSymbol}`;
		return this.http.get<PagedData>(fullUrl, { headers: this.headers }).pipe(
			tap(paged => console.log(JSON.stringify(paged.data))),
			map(paged => {
				return paged.data as Ship;
			})
		);
	}

	getMyShipCargo(shipSymbol: string): Observable<Cargo> {
		var fullUrl = `${SpaceTradersUrl}/${this.myUrl}/${shipSymbol}/cargo`;
		return this.http.get<PagedData>(fullUrl, { headers: this.headers }).pipe(
			tap(paged => console.log(JSON.stringify(paged.data))),
			map(paged => {
				return paged.data as Cargo;
			})
		);
	}

	postOrbitShip(shipSymbol: string): Observable<Nav> {
		var fullUrl = `${SpaceTradersUrl}/${this.myUrl}/ships/${shipSymbol}/orbit`;
		return this.http.post<PagedData>(fullUrl, { headers: this.headers }).pipe(
			tap(paged => console.log(JSON.stringify(paged.data))),
			map(paged => {
				return paged.data as Nav;
			})
		);
	}
}
