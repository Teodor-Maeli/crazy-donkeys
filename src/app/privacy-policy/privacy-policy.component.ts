import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent implements OnInit {
  privacySentences: string[] = [];
  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i < 66; i++) {
      this.privacySentences.push('PRIVACY_POLICY.sentence' + i);
    }
  }
}
