import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  constructor(private translate: TranslateService) {}

  ngOnInit(): void {}

  redirectToLocation(): void {
    window.location.href =
      'https://www.google.com/maps/dir//' +
      'crazy+donkey+asparuhovo+maps/data=' +
      '!4m6!4m5!1m1!4e2!1m2!1m1!1s0x40a453719e58c7c5:' +
      '0x4bdfc6d27f0cc747?sa=X&ved=2ahUKEwjcq9WxlZj8AhU0' +
      'SfEDHUjZCagQ9Rd6BAhFEAQ';
  }
}
