import { Component } from '@angular/core';
import { EmployeeService } from '../../Services/employee-service';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { EmployeeCard } from "../employee-card/employee-card";

@Component({
  selector: 'app-employee-list',
  imports: [RouterModule, CommonModule, EmployeeCard],
  template: `
     <h2>Employee List</h2>

     <button routerLink="/add">Add Employee</button>

     <div *ngFor="let emp of employees">
      <app-employee-card [employee]="emp"></app-employee-card>
     </div>
  `,
  styleUrl: './employee-list.css',
})
export class EmployeeList {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
  

}
