import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {EmployeeService} from "../../services/employee.service";
import {Observable} from "rxjs";
import {PersonModel} from "../../model/person.model";
import {ProjectService} from "../../services/project.service";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectListComponent {
  constructor(private _userService: ProjectService) { }
  data$: Observable<ProjectModel[] | null> = this._userService.getAll();
}
