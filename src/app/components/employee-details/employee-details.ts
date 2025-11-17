import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { EmployeeService } from '../../Services/employee-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule, RouterLink],
  template: `
  <div *ngIf="emp">
    <p>Name: {{emp.name}}</p>
    <p> Position: {{emp.Position}}</p>
    <p> Company: {{emp.company}}</p>
  </div>
  <button routerLink="/"> Back to Employee List</button>
  `,
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {

  emp: any;

  constructor(private route: ActivatedRoute, private service: EmployeeService){
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.emp = this.service.getEmployeeById(id);
  }

}
