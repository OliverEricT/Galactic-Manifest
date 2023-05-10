import { Requirements } from "../requirements/requirements";

export class Engine {
	constructor(
		public symbol: string,
  	public name: string,
  	public description: string,
  	public condition: number,
  	public speed: number,
  	public requirements: Requirements
	) {};
}
