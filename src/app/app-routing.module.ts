import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatisticsGridComponent } from './components/statistics-grid/statistics-grid.component';

const routes: Routes = [
	{path: '', component: StatisticsGridComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
