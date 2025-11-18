import { Routes } from '@angular/router';
import { EmployeeList } from './components/employee-list/employee-list';
import { EmployeeDetails } from './components/employee-details/employee-details';
import { AddEmployee } from './components/add-employee/add-employee';
import { EmployeeSearch } from './components/employee-search/employee-search';

export const routes: Routes = [
    {path: '', component:EmployeeList},
    {path: 'employee/:id', component: EmployeeDetails},
    {path: 'add', component: AddEmployee},
    {path: 'search', component: EmployeeSearch}
];
