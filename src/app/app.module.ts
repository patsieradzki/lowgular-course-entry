import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeesFacesComponentModule } from './ui/employees-faces/employees-faces.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { UserServiceModule } from './services/user.service-module';
import { ProjectListComponentModule } from './ui/project-list-component/project-list.component-module';
import { ProjectServiceModule } from './services/project.service-module';
import { BrowserModule } from '@angular/platform-browser';
import {EmployeeFormComponentModule} from "./ui/employee-form/employee-form.component-module";

@NgModule({
  declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EmployeeListComponentModule,
        EmployeesFacesComponentModule,
        EmployeeServiceModule,
        UserServiceModule,
        ProjectListComponentModule,
        ProjectServiceModule,
        EmployeeFormComponentModule
    ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
