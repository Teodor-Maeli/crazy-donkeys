import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  cookieAccepted: boolean = false;
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    if (this.cookieService.get('policyAccepted') === 'true') {
      this.cookieAccepted = true;
    }
  }

  acceptCookies(): void {
    const now: Date = new Date();
    const expirationDate: Date = new Date(
      now.getFullYear(),
      now.getMonth() ,
      now.getDate() + 1
    );
    this.cookieAccepted = true;
    this.cookieService.set('policyAccepted', 'true', expirationDate);
  }

  privacyReadMore(): void {
    this.router.navigate(['/cookie-policy']);
  }

  isReadingPrivacyPolicy(): boolean {
    return window.location.toString().includes('cookie-policy');
  }
}
