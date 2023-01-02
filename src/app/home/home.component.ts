import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slide', [
      state(
        '0',
        style({
          transform: 'translateX(0%)',
        })
      ),
      state(
        '25',
        style({
          transform: 'translateX(-25%)',
        })
      ),
      state(
        '50',
        style({
          transform: 'translateX(-50%)',
        })
      ),
      state(
        '75',
        style({
          transform: 'translateX(-75%)',
        })
      ),
      transition('* => *', [animate(500)]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  private slider: HTMLDivElement = document.createElement('div');
  percentage: number = 0;
  interval!:NodeJS.Timer;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
   this.startInterval();

  }

  slideNext(): void {
    if (this.percentage === 75) {
      this.percentage = 0;
      return;
    }
    this.percentage += 25;
    console.log(this.percentage);
  }

  slidePrev(): void {
    if (this.percentage === 0) {
      this.percentage = 75;
      return;
    }
    this.percentage -= 25;
    console.log(this.percentage);
  }

  getCurrentSlide(): number {
    return this.percentage;
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.slideNext();
    },2500)
  }

  stopInterval(): void {
    clearInterval(this.interval);
  }
}
