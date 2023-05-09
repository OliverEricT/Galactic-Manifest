import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpaceTradersUrl } from 'src/globals';
import { Observable, map, tap } from 'rxjs';
//import { join } from 'path';
import { Agent } from 'src/app/interfaces/agent/agent';
import * as secrets from '../../../assets/secrets.json';

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
		return this.http.get(fullUrl, { headers: this.headers }).pipe(
			tap((data: any) => console.log(JSON.stringify(data))),
			map(data =>{
				var agent: Agent = new Agent(
					data.data.accountId,
					data.data.symbol,
					data.data.headquarters,
					data.data.credits
				);
				return agent;
			})
		);
	}
}
