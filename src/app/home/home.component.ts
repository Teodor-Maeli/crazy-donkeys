import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {
  burgers,
  defaultTitleClass,
  hotProducts,
  portions,
  wraps,
} from '../products/products';
import { Products } from '../products/products.metadata';

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
  percentage: number = 0;
  interval!: NodeJS.Timer;
  titleClass: string = defaultTitleClass;
  burgers: Products[] = burgers;
  wraps: Products[] = wraps;
  portions: Products[] = portions;
  potatos: string[] = [];
  wrapPNG: string = './assets/pictures/wrap.png';
  burgerPNG: string = './assets/pictures/cartoon-burger.png';
  hotdogPNG: string = './assets/pictures/hotdog.png';
  chickenPNG: string = './assets/pictures/fried-chicken.png';
  hotProducts: Products[] = hotProducts
  constructor() {}

  ngOnInit(): void {
    let doc: HTMLDivElement = document.getElementById(
      'french-fries'
    ) as HTMLDivElement;

    for (let i = 0; i < window.innerWidth / 90; i++) {
      doc.appendChild(this.appendFrenchFriensToElement());
    }
  }

  ngAfterViewInit(): void {
    this.startInterval();
  }

  appendFrenchFriensToElement(): HTMLImageElement {
    let randomImgCode: string = this.generateRandomNums(1, 5, '1');
    let doc: HTMLImageElement = document.createElement('img');
    doc.src =
      randomImgCode === '21'
        ? this.wrapPNG
        : randomImgCode === '31'
        ? this.hotdogPNG
        : this.burgerPNG;
    doc.classList.add('grayscale-[80%]');
    doc.style.position = 'absolute';
    doc.style.right = this.generateRandomNums(-2, 105, '%');
    doc.style.height = this.generateRandomNums(35, 150, '%');
    doc.style.transform = 'rotate(' + this.generateRandomNums(0, 360, 'deg)');
    doc.style.animationDelay = this.generateRandomNums(3, 100, 's');
    doc.style.animation =
      'drop ' + this.generateRandomNums(5, 20, 's') + ' linear infinite';
    return doc;
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
    }, 215000);
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

  generateRandomNums(min: number, max: number, prefix: string): string {
    let value = Math.floor(Math.random() * (min - max + 1)) + max + prefix;
    return value;
  }
}
