import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { StaysComponent } from './components/stays/stays.component';
import { UpdateStayComponent } from './components/update-stay/update-stay.component';
import { UpdateComponent } from './components/update/update.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'users',component:UsersComponent},
  {path:'registeredStays',component:StaysComponent},
  {path:'orderHistory',component:OrdersComponent},
  {path:'update',component:UpdateComponent},
  {path:'updateStay',component:UpdateStayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
