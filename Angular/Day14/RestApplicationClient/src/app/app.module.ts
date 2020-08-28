import { AuthRouteGaurdService } from './auth-route-gaurd.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
import { EmployeeDetailsComponent } from './employee-service/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeRegistrationComponent } from './employee-service/employee-registration/employee-registration.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  // { path: 'empdetails', component: EmployeeDetailsComponent },
  { path: 'view', component: EmployeeServiceComponent , canActivate: [AuthRouteGaurdService] },
  { path: 'add', component: EmployeeRegistrationComponent , canActivate: [AuthRouteGaurdService] },
  { path: 'login', component: LoginComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeServiceComponent,
    EmployeeDetailsComponent,
    EmployeeRegistrationComponent,
    MenuComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
