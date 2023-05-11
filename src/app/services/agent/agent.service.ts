import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpaceTradersUrl } from 'src/globals';
import { Observable, map, tap } from 'rxjs';
import { Agent } from 'src/app/objects/agent/agent';
import { PagedData } from 'src/app/objects/paged-data/paged-data';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

	//private token = secrets;
	private token = JSON.parse(localStorage.getItem('Bearer') ?? '{}')?.token;

	private myUrl = 'my';
	private headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${this.token}`
	});

  constructor(private http: HttpClient) { }

	getMyAgent(): Observable<Agent> {
		var fullUrl = `${SpaceTradersUrl}/${this.myUrl}/agent`;
		return this.http.get<PagedData>(fullUrl, { headers: this.headers }).pipe(
			tap((paged: PagedData) => console.log(JSON.stringify(paged.data))),
			map((pagedData: PagedData) => {
				return pagedData.data as Agent;
			})
		);
	}
}
