import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
})
export class TermsOfUseComponent implements OnInit, AfterViewInit {
  terms: string[] = [];
  termsTitles: string[] = [
    'sentence6',
    'sentence9',
    'sentence12',
    'sentence15',
    'sentence18',
  ];

  constructor() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.termsTitles.forEach((title) => {
        let paragraph = document.getElementById(title) as HTMLParagraphElement;
        paragraph.classList.add('text-orange-600');
      });
    });
  }

  ngOnInit(): void {
    for (let i = 1; i < 22; i++) {
      this.terms.push('TERMS.sentence' + i);
    }
  }
}
