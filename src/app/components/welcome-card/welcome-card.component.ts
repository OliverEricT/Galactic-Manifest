import { Component, OnInit } from '@angular/core';
import { Agent } from 'src/app/interfaces/agent/agent';
import { AgentService } from 'src/app/services/agent.service/agent.service';

@Component({
  selector: 'app-welcome-card',
  templateUrl: './welcome-card.component.html',
  styleUrls: ['./welcome-card.component.scss']
})
export class WelcomeCardComponent implements OnInit{

	agent: Agent = {} as Agent;

	constructor(private agentService: AgentService) {}

	ngOnInit(): void {
		this.getAgent();
	}

	getAgent(): void {
		this.agentService.getMyAgent().subscribe(agent => {
			this.agent = agent;
		})
	}

}
