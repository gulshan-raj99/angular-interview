import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-search.html',
  styleUrl: './employee-search.css',
})
export class EmployeeSearch {

  searchText: string = '';
  employees = [
    {id:1, name:"John"},
    {id:2, name: "Gulshan"},
    {id:3, name: "Amit"}
  ];

  filtered = this.employees;

  filterEmployees() {
    this.filtered = this.employees.filter(e =>
      e.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

}
