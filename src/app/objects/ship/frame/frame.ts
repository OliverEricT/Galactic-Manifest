import { Requirements } from "../requirements/requirements";

export class Frame {
	constructor(
		public symbol: string,
  	public name: string,
  	public description: string,
  	public moduleSlots: number,
  	public mountingPoints: number,
  	public fuelCapacity: number,
  	public condition: number,
  	public requirements: Requirements
	) {};
}
