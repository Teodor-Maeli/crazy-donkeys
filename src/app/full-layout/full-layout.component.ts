import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  cookieAccepted = false;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    if (this.cookieService.get('cookieAccepted') === 'true') {
      this.cookieAccepted = true;
    }
  }

  acceptCookies() {
    const now = new Date();
    const expirationDate = new Date(
      now.getFullYear(),
      now.getMonth() + 5,
      now.getDate()
    );
    this.cookieAccepted = true;
    this.cookieService.set('cookieAccepted', 'true',expirationDate);
  }
}
