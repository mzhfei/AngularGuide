import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Data} from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessgae: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessgae = this.route.snapshot.data['meesage'];
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessgae = data['message'];
      }
    );
  }

}
