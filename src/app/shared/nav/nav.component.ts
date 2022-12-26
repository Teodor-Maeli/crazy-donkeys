import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  buttons: string[] = ['Начало','Меню','Контакти'];
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.closeLanguageChanger();
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
    let doc = document.getElementById('lang-flag') as HTMLImageElement;
    if (language === 'bg') {
      doc.src = '../../../assets/ icons/bulgaria.png';
    } else if (language === 'en') {
      doc.src = '../../../assets/ icons/united-kingdom.png';
    }
  }
}
