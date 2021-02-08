import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {SignupComponent} from './components/signup/signup.component';
import {HomeComponent} from './components/home/home.component'
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookComponent } from './components/book/book.component';
import { FAQComponent } from './components/faq/faq.component';
import { AuthGuard } from './auth.guard';
import { ViewStayComponent } from './components/view-stay/view-stay.component';
import { ConfirmDetailsComponent } from './components/confirm-details/confirm-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyDetailsComponent } from './components/my-details/my-details.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PaymentComponent } from './components/payment/payment.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'userLogin',component:LoginComponent},
  {path:'userRegister',component:SignupComponent},
  {path:'home',component:HomeComponent},
  {path:'contactUs',component:ContactUsComponent},
  {path:'aboutUs',component:AboutUsComponent},
  {path:'ourServices',component:ServicesComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'bookStay',component:BookComponent,canActivate:[AuthGuard]},
  {path:'faq',component:FAQComponent},
  {path:'viewStay',component:ViewStayComponent},
  {path:'viewStay/:id',component:ViewStayComponent},
  {path:'confirmDetails',component:ConfirmDetailsComponent},
  {path:'myProfile',component:MyProfileComponent,
    children:[{path:'myDetails',component:MyDetailsComponent},
              {path:'myOrders',component:MyOrdersComponent}
  ]},
  {path:'makePayment',component:PaymentComponent},
  {path: '**', component:PageNotFoundComponent }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
