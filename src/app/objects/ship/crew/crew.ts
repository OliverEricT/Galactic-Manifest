export class Crew {
	constructor(
		public current: number,
		public capacity: number,
		public required: number,
		public rotation: string,
		public morale: number,
		public wages: number
	) {};
}
