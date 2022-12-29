import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-icons',
  templateUrl: './social-icons.component.html',
  styleUrls: ['./social-icons.component.scss'],
})
export class SocialIconsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  redirectSocials(media: string) {
    if (media == 'instagram') {
      window.location.href = 'https://www.instagram.com/crazydonkeys2023/';
    } else if (media == 'facebook') {
      window.location.href =
        'https://www.facebook.com/Crazy-Donkeys-%D0%B3%D1%80%D0%B8%D0%BB-%D1%81%D0%B0%D0%BD%D0%B4%D0%B2%D0%B8%D1%87%D0%B8-%D0%B8-%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D0%B8-101110796143666/';
    }
  }
}
