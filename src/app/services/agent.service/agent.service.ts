import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpaceTradersUrl } from 'src/globals';
import { Observable, map, tap } from 'rxjs';
import { Agent } from 'src/app/objects/agent/agent';
import * as secrets from '../../../assets/secrets.json';
import { PagedData } from 'src/app/objects/paged-object/paged-data';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

	private token = secrets;

	private myUrl = 'my/';
	private headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${this.token.Bearer}`
	});

  constructor(private http: HttpClient) { }

	getMyAgent(): Observable<Agent> {
		//var fullUrl = join(SpaceTradersUrl.spaceTradersUrl,this.myUrl,'agent')
		var fullUrl = `${SpaceTradersUrl}/${this.myUrl}agent`;
		console.log(fullUrl);
		return this.http.get<PagedData>(fullUrl, { headers: this.headers }).pipe(
			tap((paged: PagedData) => console.log(JSON.stringify(paged.data))),
			map((pagedData: PagedData) => {
				var data = pagedData.data;
				var agent: Agent = new Agent(
					data.accountId,
					data.symbol,
					data.headquarters,
					data.credits
				);
				return agent;
			})
		);
	}

	//getMyShips(): Observable<Sh>
}
