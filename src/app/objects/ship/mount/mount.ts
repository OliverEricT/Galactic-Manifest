import { Requirements } from "../requirements/requirements";

export class Mount {
	constructor(
		public symbol: string,
  	public name: string,
  	public description: string,
  	public strength: number,
  	public requirements: Requirements,
  	public deposits?: string[],
	) {};
}
