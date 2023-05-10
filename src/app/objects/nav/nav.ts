import { Route } from "./route";

export class Nav {
	constructor(
		public systemSymbol: string,
		public waypointSymbol: string,
		public route: Route,
		public status: string,
		public flightMode: string
	) {};
}
