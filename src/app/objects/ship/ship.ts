import { Nav } from "../nav/nav";
import { Cargo } from "./cargo/cargo";
import { Crew } from "./crew/crew";
import { Engine } from "./engine/engine";
import { Frame } from "./frame/frame";
import { Fuel } from "./fuel/fuel";
import { Module } from "./module/module";
import { Mount } from "./mount/mount";
import { Reactor } from "./reactor/reactor";
import { Registration } from "./registration/registration";

export class Ship {
	constructor(
		public symbol: string,
  	public nav: Nav,
  	public crew: Crew,
  	public fuel: Fuel,
  	public frame: Frame,
  	public reactor: Reactor,
  	public engine: Engine,
  	public modules: Module[],
  	public mounts: Mount[],
  	public registration: Registration,
  	public cargo: Cargo
	) {};
}
