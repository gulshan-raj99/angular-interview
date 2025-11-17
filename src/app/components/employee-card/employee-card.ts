import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-employee-card',
  imports: [CommonModule,RouterModule],
  template: `
  <div class ="card" appEmployeeDireactive>
  <h3>{{employee.name}}</h3>
  <p>Position: {{employee.position}}</p>
  <p>Company: {{employee.company}}</p>
  </div>`,
  styleUrl: './employee-card.css',
})
export class EmployeeCard {

  @Input() employee: any;

}
