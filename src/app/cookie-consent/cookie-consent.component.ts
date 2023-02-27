import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent implements OnInit {
  cookieAccepted: boolean = false;
  isRedirected: boolean = false;
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    if (this.cookieService.get('policyAccepted') === 'true') {
      this.cookieAccepted = true;
    }

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        let castedEvent: NavigationStart = event as NavigationStart;

        if (castedEvent.url == '/cookie-policy') {
          this.isRedirected = true;
        } else {
          this.isRedirected = false;
        }
      }
    });

    this.isRedirected = window.location.href.includes('/cookie-policy')
      ? true
      : false;
  }

  acceptCookies(): void {
    const now: Date = new Date();
    const expirationDate: Date = new Date(
      now.getFullYear(),
      now.getMonth() + 3,
      now.getDate() 
    );
    this.cookieAccepted = true;
    this.cookieService.set('policyAccepted', 'true', expirationDate);
  }

  privacyReadMore(): void {
    this.router.navigate(['/cookie-policy']);
  }
}
