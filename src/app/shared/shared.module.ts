import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HomeComponent } from '../home/home.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from './functions/functions';
import { HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [NavComponent, FooterComponent, HomeComponent],
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
  exports: [NavComponent, FooterComponent, HomeComponent, TranslateModule],
})
export class SharedModule {}
