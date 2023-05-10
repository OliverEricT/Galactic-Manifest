import { Consumed } from "./consumed";

export class Fuel {
	constructor(
		public current: number,
  	public capacity: number,
  	public consumed: Consumed
	) {};
}
