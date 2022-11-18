import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserFormComponent {
  readonly userForm: FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    salary: new FormControl()
  });
  onButtonClicked(employeeForm: { name: string, age: string, salary: string }) {
    alert('User was successfully added to database. Name: ' + employeeForm.name + ' Age: '
      + employeeForm.age + ' Salary: ' + employeeForm.salary)
  }

  onUserFormSubmitted(userForm: FormGroup): void {
  }
}
