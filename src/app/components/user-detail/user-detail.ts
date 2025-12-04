import { Component } from '@angular/core';
import { UserService } from '../../Service/user-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  imports: [FormsModule],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {

  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();

  }
  // loadUser() {
  //   this.userService.getUser().subscribe(res =>{
  //     this.users = res;
  //   })
  // }

}
