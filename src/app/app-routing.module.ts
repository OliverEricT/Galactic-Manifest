import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FleetGridComponent } from './components/fleet-grid/fleet-grid.component';
import { StatisticsGridComponent } from './components/statistics-grid/statistics-grid.component';

const routes: Routes = [
	{path: '', component: StatisticsGridComponent},
	{path: 'fleet-grid', component: FleetGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
