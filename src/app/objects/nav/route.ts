import { Location } from "./location";

export class Route {
	constructor(
		public departure: Location,
		public destination: Location,
		public arrival: string,
		public departureTime: string
	) {};
}
