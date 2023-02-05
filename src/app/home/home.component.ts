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
  defaultDescClass,
  defaultTitleClass,
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
  descriptionClass: string = defaultDescClass;
  burgers: Products[] = burgers;
  wraps: Products[] = wraps;
  portions: Products[] = portions;
  potatos: string[] = [];
  potatoPNG: string = './assets/pictures/potato.png';
  burgerPNG: string = './assets/pictures/cartoon-burger.png';
  hotdogPNG: string = './assets/pictures/hotdog.png';
  chickenPNG: string = './assets/pictures/fried-chicken.png';
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => this.scrollTo(), 1200);
    let doc: HTMLDivElement = document.getElementById(
      'french-fries'
    ) as HTMLDivElement;

    for (let i = 0; i < window.innerWidth / 50; i++) {
      doc.appendChild(this.appendFrenchFriensToElement());
    }
  }

  ngAfterViewInit(): void {
    this.startInterval();
  }

  appendFrenchFriensToElement(): HTMLImageElement {
    let randomImgCode: string = this.generateRandomNums(1, 6, '1');
    let doc: HTMLImageElement = document.createElement('img');
    doc.src =
      randomImgCode === '21'
        ? this.potatoPNG
        : randomImgCode === '41'
        ? this.hotdogPNG
        : randomImgCode === '51'
        ? this.chickenPNG
        : randomImgCode === '31'
        ? this.burgerPNG
        : this.potatoPNG;
    doc.style.position = 'absolute';
    doc.style.right = this.generateRandomNums(-2, 105, '%');
    doc.style.height = this.generateRandomNums(20,100, '%');
    doc.style.transform = 'rotate(' + this.generateRandomNums(0, 360, 'deg)');
    doc.style.animation =
      'drop ' + this.generateRandomNums(10, 20, 's') + ' linear infinite';
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

  scrollTo(): void {
    const slider = document.getElementById('info') as HTMLDivElement;
    slider.scrollIntoView({ behavior: 'smooth' });
  }

  generateRandomNums(min: number, max: number, prefix: string): string {
    let value = Math.floor(Math.random() * (min - max + 1)) + max + prefix;
    return value;
  }
}
