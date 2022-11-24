import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { EmployeedetailsparamsModel } from '../../model/employeedetailsparams.model';
import {map} from "rxjs/operators";

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeDetailsComponent {
  public param$: Observable<EmployeedetailsparamsModel> = this._activatedRoute.params.pipe(
    map(params => ({ id: params['id'], name: params['name']}))
  );

  constructor(private _activatedRoute: ActivatedRoute) {
  }
}
