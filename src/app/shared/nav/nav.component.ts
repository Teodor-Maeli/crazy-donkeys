import { Component, OnInit, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  buttons: string[] = [
    'NAV.MENU.HOME',
    'NAV.MENU.FOOD_MENU',
    'NAV.MENU.CONTACTS',
  ];

  constructor(
    private renderer: Renderer2,
    private translate: TranslateService
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
      doc.src = '../../../assets/ icons/bulgaria.png';
    } else if (language === 'en') {
      doc.src = '../../../assets/ icons/united-kingdom.png';
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
}
