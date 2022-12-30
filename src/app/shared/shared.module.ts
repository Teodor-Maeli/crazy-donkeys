import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './functions/functions';
import { HttpClient } from '@angular/common/http';
import { SocialIconsComponent } from './social-icons/social-icons.component';

@NgModule({
  declarations: [NavComponent, FooterComponent,SocialIconsComponent],
  imports: [
    CommonModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [NavComponent, FooterComponent,SocialIconsComponent, TranslateModule],
})
export class SharedModule {}
