import { NgModule } from '@angular/core';
import { EmployeeListComponentModule } from '../employee-list/employee-list.component-module';
import { EmployeeServiceModule } from '../../services/employee.service-module';
import { EmployeeFormComponentModule } from '../employee-form/employee-form.component-module';
import { HomeComponent } from './home.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [EmployeeListComponentModule, EmployeeServiceModule, EmployeeFormComponentModule, RouterModule],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
