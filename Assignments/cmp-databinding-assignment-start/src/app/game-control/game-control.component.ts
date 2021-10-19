import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output()numberToSend = new EventEmitter<number>();
  incrementNumber = 0;
  interval;
  constructor() { }

  ngOnInit(): void {
  }

  onClickStart() {
    this.interval = setInterval(() => {
      this.incrementNumber += 1;
      this.numberToSend.emit(this.incrementNumber);
    }, 1000);
  }

  onClickPause() {
    clearInterval(this.interval);
  }



}
