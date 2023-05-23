import { Component } from '@angular/core';
import { UserService } from '../../services/users.service';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css'],
})
export class UsersListComponent {
  userList: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getuserList();
  }

  getuserList(): void {
    this.userService.getUserList().subscribe((response: any) => {
      console.log(response.data);
      this.userList = response.data;
    });
  }
}
