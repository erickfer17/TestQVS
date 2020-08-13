import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TestComponent } from './components/test/test.component';
import { ResultadoComponent } from './components/resultado/resultado.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:':test', component:TestComponent},
  {path:':test/resultado',  component:ResultadoComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
