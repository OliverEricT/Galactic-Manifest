import { Inventory } from "../inventory/inventory";

export class Cargo {
	constructor(
		public capacity: number,
  	public units: number,
  	public inventory: Inventory[]
	) {};
}
