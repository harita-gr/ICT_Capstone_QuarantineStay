import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http';
import{ FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { UsersComponent } from './components/users/users.component';
import { StaysComponent } from './components/stays/stays.component';
import { OrdersComponent } from './components/orders/orders.component';
import { UpdateComponent } from './components/update/update.component';
import { UpdateStayComponent } from './components/update-stay/update-stay.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    UsersComponent,
    StaysComponent,
    OrdersComponent,
    UpdateComponent,
    UpdateStayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
