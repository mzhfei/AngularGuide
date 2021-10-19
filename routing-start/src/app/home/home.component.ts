import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthServie} from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private authService: AuthServie) { }

  ngOnInit() {
  }

  loadServices(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'],
      {queryParams: {allowEdit: ' 1'}, fragment: 'loading'}
    );
  }
  onLogin() {
    this.authService.login();
  }
  onLogoff() {
    this.authService.logoff();
  }

}
