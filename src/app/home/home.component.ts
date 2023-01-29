import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { burgers, defaultDescClass, defaultTitleClass, portions, wraps } from '../products/products';
import { Products } from '../products/products.metadata';
import { elementAt } from 'rxjs';

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
        '33.33',
        style({
          transform: 'translateX(-33.33%)',
        })
      ),
      state(
        '66.66',
        style({
          transform: 'translateX(-66.66%)',
        })
      ),
      transition('* => *', [animate(500)]),
    ]),
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
  private slider: HTMLDivElement = document.createElement('div');
  percentage: number = 0;
  interval!: NodeJS.Timer;
  titleClass:string = defaultTitleClass;
  descriptionClass:string = defaultDescClass;
  burgers: Products[] = burgers
  wraps: Products[] = wraps
  portions: Products[] = portions
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.startInterval();
  }

  slideNext(): void {
    if (this.percentage === 66.66) {
      this.percentage = 0;
      return;
    }
    this.percentage += 33.33;
  }

  slidePrev(): void {
    if (this.percentage === 0) {
      this.percentage = 66.66;
      return;
    }
    this.percentage -= 33.33;
  }

  getCurrentSlide(): number {
    return this.percentage;
  }

  startInterval(): void {
    this.interval = setInterval(() => {
      this.slideNext();
    }, 112500);
  }

  stopInterval(): void {
    clearInterval(this.interval);
  }

  nextFromMenu(): string {
    return this.percentage == 0
      ? 'WRAPS'
      : this.percentage == 33.33
      ? 'PORTIONS'
      : 'BURGERS';
  }

  prevFromMenu(): string {
    return this.percentage == 0
      ? 'PORTIONS'
      : this.percentage == 33.33
      ? 'BURGERS'
      : 'WRAPS';
  }

  scrollTo(): void {
    const slider = document.getElementById("info") as HTMLDivElement;
    slider.scrollIntoView({behavior:"smooth"});
  }
}
