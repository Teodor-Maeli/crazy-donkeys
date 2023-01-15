import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MenuButtons } from '../models/models';
import { environment } from 'src/environments/environment';

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
    private router: Router
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
      doc.src = '../../../assets/icons/bulgaria.png';
    } else if (language === 'en') {
      doc.src = '../../../assets/icons/united-kingdom.png';
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
}
