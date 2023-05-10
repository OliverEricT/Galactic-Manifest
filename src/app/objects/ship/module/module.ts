import { Requirements } from "../requirements/requirements";

export class Module {
	constructor(
		public symbol: string,
  	public name: string,
  	public description: string,
  	public requirements: Requirements,
  	public capacity?: number,
  	public range?: number
	) {};
}
