import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      .overfive{
        color: blue;
      }
    `
  ]
})
export class AppComponent {
  show = false;
  timeStamps = [];
  constructor() {
  }
  onClickBtn(){
    this.show = !this.show;
    this.timeStamps.push(new Date());

  }
}
