import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit{
  @Input() users: string[];

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.users =  this.userService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.userService.activeUser(id);
  }
}
