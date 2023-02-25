import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss'],
})
export class CookiePolicyComponent implements OnInit, AfterViewInit {
  cookiePolicy: string[] = [];
  cookiesTitles: string[] = [
    'sentence2',
    'sentence4',
    'sentence7',
    'sentence12',
    'sentence14',
    'sentence16',
  ];
  cookieSubTitles: string[] = ['sentence8', 'sentence10'];
  constructor() {}
  ngAfterViewInit(): void {
    this.cookiesTitles.forEach((title) => {
      let paragraph = document.getElementById(title) as HTMLParagraphElement;
      paragraph.classList.add('text-orange-600');
    });

    this.cookieSubTitles.forEach((title) => {
      let paragraph = document.getElementById(title) as HTMLParagraphElement;
      paragraph.classList.add('text-orange-300');
    });
  }

  ngOnInit(): void {
    for (let i = 2; i < 19; i++) {
      this.cookiePolicy.push('COOKIE_POLICY.sentence' + i);
    }
  }
}
