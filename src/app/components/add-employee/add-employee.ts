import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from '../../Services/employee-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <h2>Add Employee</h2>

    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="name" placeholder="Name" />
      <input formControlName="position" placeholder="position" />
      <input formControlName="company" placeholder="company" />

      <button type="submit">Save</button>
    </form>
  `,
  styleUrl: './add-employee.css',
})
export class AddEmployee {

  form: any;

  constructor(private fb: FormBuilder, private service: EmployeeService, private router: Router) {}

  ngOnInit(){
    this.form = this.fb.group({
      name: [''],
      position: [''],
      company: ['']
    });
  }

  submit() {
    const id = Math.floor(Math.random() * 10000);
    this.service.addEmployee({
      id: id,
      ...this.form.value
    });
    this.router.navigate(['/']);
  }

}
