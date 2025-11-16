import { Injectable } from '@angular/core';

export interface Employee {
  id: number;
  name: string;
  position: string;
  company: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  private employees: Employee[] = [
    {id:1, name: 'Johan Doe', position: 'Software Engineer', company: 'Google'},
    {id:2, name: 'Jane Smith', position: 'Product Manager', company: 'Apple'},
    {id:3, name: 'Mike Johnson', position: 'UX Designer', company: 'Microsoft'},
    {id:4, name: 'Emily Davis', position: 'Data Scientist', company: 'Facebook'},
    {id:5, name: 'David Wilson', position: 'DevOps Engineer', company: 'Amazon'}
  ];

  getEmployees(){
    return this.employees;
  }

  getEmployeeById(id: number) {
    return this.employees.find(e => e.id === id);
  }

  addEmployee(emp: Employee) {
    this.employees.push(emp);
  }
  
}
