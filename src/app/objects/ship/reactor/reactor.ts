import { Requirements } from "../requirements/requirements";

export class Reactor {
	constructor(
		public symbol: string,
  	public name: string,
  	public description: string,
  	public condition: number,
  	public powerOutput: number,
  	public requirements: Requirements
	) {};
}
