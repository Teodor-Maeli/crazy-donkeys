import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
})
export class FullLayoutComponent implements OnInit {
  cookieAccepted:boolean = false;
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    if (this.cookieService.get('cookieAccepted') === 'true') {
      this.cookieAccepted = true;
    }
  }

  acceptCookies() {
    const now:Date = new Date();
    const expirationDate:Date = new Date(
      now.getFullYear(),
      now.getMonth() + 5,
      now.getDate()
    );
    this.cookieAccepted = true;
    this.cookieService.set('cookieAccepted', 'true', expirationDate);
  }

  privacyReadMore() {
    const element:HTMLParagraphElement = document.getElementById("privacy_info") as HTMLParagraphElement;
  }
}
