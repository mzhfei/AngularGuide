import {LoggingService} from './logging.service';
import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class AccountsService {
  public accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  @Output() statusUpdate: EventEmitter<String> = new EventEmitter<String>();
  constructor(private loggingService: LoggingService) {
  }

  public addAccount(name: string, status: string) {
    this.accounts.push({name, status});
    this.loggingService.logStatusChange(status);
  }

  public updateAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status);
  }
}
