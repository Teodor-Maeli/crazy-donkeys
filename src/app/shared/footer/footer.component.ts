import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {}

  redirectToLocation(): void {
    if (this.cookieService.get('cookieAccepted') !== 'true') {
      return;
    }
    window.location.href =
      'https://www.google.com/maps/dir//' +
      'crazy+donkey+asparuhovo+maps/data=' +
      '!4m6!4m5!1m1!4e2!1m2!1m1!1s0x40a453719e58c7c5:' +
      '0x4bdfc6d27f0cc747?sa=X&ved=2ahUKEwjcq9WxlZj8AhU0' +
      'SfEDHUjZCagQ9Rd6BAhFEAQ';
  }

  navigateTermsOfUse(): void {
    this.router.navigate(['/terms-of-use']);
    window.scrollTo(0, 0);
  }

  navigatePrivacyPolicy(): void {
    this.router.navigate(['/privacy-policy']);
    window.scrollTo(0, 0);
  }
}
