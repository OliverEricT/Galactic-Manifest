export class Agent {
	accountId: string;
	username: string;
	headquarters: string;
	credits: number;

	constructor(
		accountId: string,
		username: string,
		headquarters: string,
		credits: number){
			this.accountId = accountId;
			this.username = username;
			this.headquarters = headquarters;
			this.credits = credits;
	}
}
