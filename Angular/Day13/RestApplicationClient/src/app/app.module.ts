import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeeServiceComponent } from './employee-service/employee-service.component';
import { EmployeeDetailsComponent } from './employee-service/employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'empdetails', component: EmployeeDetailsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeServiceComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
