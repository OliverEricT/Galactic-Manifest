import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SpaceTradersUrl } from 'src/globals';
import { Observable } from 'rxjs';
import { join } from 'path';
import { Agent } from 'src/app/interfaces/agent/agent';
import * as secrets from '../../../assets/secrets.json';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

	private myUrl = 'my/';
	private headers = new HttpHeaders({
		'Content-Type': 'application/json',
		'Authorization': `Bearer ${secrets.Bearer}`
	});

  constructor(private http: HttpClient) { }

	getMyAgent(): Observable<Agent> {
		var fullUrl = join(SpaceTradersUrl.spaceTradersUrl,this.myUrl,'agent')
		return this.http.get<Agent>(fullUrl, { headers: this.headers })
	}
}
