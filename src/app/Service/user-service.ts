import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  // private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  // constructor(private http: HttpClient) {}

  // getUser(): Observable<any[]> {
  //   return this.http.get<any[]>(this.apiUrl);
  // }

  private users = [
    {id:1, name:'Gulshan Raj',email:'gulshan@gmail.com', city:'Delhi'},
    { id: 2, name: 'Rahul Kumar', email: 'rahul@example.com', city: 'Mumbai' },
    { id: 3, name: 'Anita Sharma', email: 'anita@example.com', city: 'Bangalore' },
    { id: 4, name: 'Suman Das', email: 'suman@example.com', city: 'Kolkata' }

  ]

  getUsers() {
    return this.users;

  }
  
}
