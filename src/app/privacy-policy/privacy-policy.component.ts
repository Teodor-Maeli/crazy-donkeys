import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit, AfterViewInit {
  privacySentences: string[] = [];
  privacyTitles: string[] = [
    'sentence1',
    'sentence3',
    'sentence8',
    'sentence11',
    'sentence4',
    'sentence16',
    'sentence19',
    'sentence21',
    'sentence23',
    'sentence26',
    'sentence28',
    'sentence32',
    'sentence35',
    'sentence45',
    'sentence57',
    'sentence59',
  ];

  constructor() {}

  ngAfterViewInit(): void {
    this.privacyTitles.forEach((title) => {
      let paragraph = document.getElementById(title) as HTMLParagraphElement;
      paragraph.classList.add('text-orange-600');
    });
  }

  ngOnInit(): void {
    for (let i = 1; i < 65; i++) {
      this.privacySentences.push('PRIVACY_POLICY.sentence' + i);
    }
  }
}
