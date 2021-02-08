import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import{ FormsModule} from '@angular/forms';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { HomeComponent } from './components/home/home.component';
import { ServicesComponent } from './components/services/services.component';
import { AboutUsComponent} from './components/about-us/about-us.component';
import {ContactUsComponent} from './components/contact-us/contact-us.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { BookComponent } from './components/book/book.component';
import { FAQComponent } from './components/faq/faq.component'
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ViewStayComponent } from './components/view-stay/view-stay.component';
import { ConfirmDetailsComponent } from './components/confirm-details/confirm-details.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { MyDetailsComponent } from './components/my-details/my-details.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { PaymentComponent } from './components/payment/payment.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UserHomeComponent,
    HomeComponent,
    ServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    AdminDashboardComponent,
    BookComponent,
    FAQComponent,
    ViewStayComponent,
    ConfirmDetailsComponent,
    PageNotFoundComponent,
    MyProfileComponent,
    MyDetailsComponent,
    MyOrdersComponent,
    PaymentComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
       
  ],
  providers: [ AuthGuard ,
   {
     provide:HTTP_INTERCEPTORS,
     useClass:TokenInterceptorService,
     multi:true
   }],
  bootstrap: [AppComponent]
})
export class AppModule { }
