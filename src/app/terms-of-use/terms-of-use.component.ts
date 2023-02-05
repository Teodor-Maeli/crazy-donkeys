import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terms-of-use',
  templateUrl: './terms-of-use.component.html',
  styleUrls: ['./terms-of-use.component.scss'],
})
export class TermsOfUseComponent implements OnInit {
  terms: string[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 21; i++) {
      this.terms.push('TERMS.sentence' + i);
    }
  }
}
