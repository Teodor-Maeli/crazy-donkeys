import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  slider: HTMLDivElement = document.createElement('div');
  percentage: number = 0;
  translate: string = '-translate-x-[0%]';
  interval!: NodeJS.Timer;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.slider = document.getElementById('slider') as HTMLDivElement;
    this.interval = setInterval(() => {
      this.slideNext();
    }, 5000);
  }

  slideNext(): void {
    if (this.percentage === 75) {
      this.percentage = -25;
      this.slideNext();
      return;
    }
    this.percentage = this.percentage + 25;
    this.translate = '-translate-x-[' + this.percentage + '%]';

    console.log(this.slider); 
  }

  slidePrev(): void {
    if (this.percentage === 0) {
      return;
    }
    this.percentage = this.percentage - 25;
    this.translate = '-translate-x-[' + this.percentage + '%]';
  }

  onHoverStopSlider(): void {
    clearInterval(this.interval);
  }
}
