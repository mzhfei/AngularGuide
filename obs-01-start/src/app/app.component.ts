import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';

import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  userActivated = false;
  private userServiceSubscription: Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this. userServiceSubscription = this.userService.activatedEmitter.subscribe(
      (didActivated) => {
        this.userActivated = didActivated;
      }
    );
  }

  ngOnDestroy(): void {
    this.userServiceSubscription.unsubscribe();
    this.userActivated = false;
  }
}