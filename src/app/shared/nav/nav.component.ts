import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuButtons } from '../models/models';
import { environment } from 'src/environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  buttons: MenuButtons[] = [
    {
      name: 'NAV.MENU.HOME',
      location: '',
      class: 'hover:-rotate-2 ml-[10px] sm:ml-0',
    },
    {
      name: 'NAV.MENU.CONTACTS',
      location: '/contacts',
      class: 'hover:rotate-2 mr-[10px] sm:mr-0 ',
    },
  ];

  langFlag: string =
    localStorage.getItem('lang') === 'bg' || undefined
      ? environment.langFlagBg
      : environment.langFlagEn;

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  ngOnInit(): void {
    this.closeLanguageChanger();
    this.setLanguageState();
  }

  openLanguageChanger(): void {
    let doc = document.getElementById('langs') as HTMLLIElement;
    doc.style.display = 'block';
  }

  closeLanguageChanger(): void {
    this.renderer.listen('window', 'click', (e: Event) => {
      let html = e.target as HTMLElement;
      if (!html.id.toString().includes('lang-flag')) {
        let doc = document.getElementById('langs') as HTMLLIElement;
        doc.style.display = 'none';
      }
    });
  }

  onClickChangeLangFlag(language: string): void {
    this.translate.use(language);
    localStorage.setItem('lang', language);
    let doc = document.getElementById('lang-flag') as HTMLImageElement;
    if (language === 'bg') {
      doc.src = environment.langFlagBg;
    } else if (language === 'en') {
      doc.src = environment.langFlagEn;
    }
  }

  setLanguageState() {
    let language: string | null = localStorage.getItem('lang');

    if (language === 'bg' || language === 'en') {
      this.translate.use(language as string);
    } else {
      this.translate.setDefaultLang('bg');
    }
  }

  routerNavigate(path: string) {
    this.router.navigate([path]);
  
  }

  redirectSocials(media: string) {
    if (this.cookieService.get('policyAccepted') !== 'true') {
      return;
    }
    if (media == 'instagram') {
      window.location.href = 'https://www.instagram.com/crazydonkeys2023/';
    } else if (media == 'facebook') {
      window.location.href =
        'https://www.facebook.com/Crazy-Donkeys-%D0%B3%D1%80%D0%B8%D0%BB-%D1%81%D0%B0%D0%BD%D0%B4%D0%B2%D0%B8%D1%87%D0%B8-%D0%B8-%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80%D0%B8-101110796143666/';
    }
  }
}
