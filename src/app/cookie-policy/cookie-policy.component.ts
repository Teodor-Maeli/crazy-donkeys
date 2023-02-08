import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-policy',
  templateUrl: './cookie-policy.component.html',
  styleUrls: ['./cookie-policy.component.scss'],
})
export class CookiePolicyComponent implements OnInit {
  cookiePolicy: string[] = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 19; i++) {
      this.cookiePolicy.push('COOKIE_POLICY.sentence' + i);
    }
  }
}
