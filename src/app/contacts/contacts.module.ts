import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../shared/functions/functions';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsComponent } from './contacts.component';
import { SocialIconsComponent } from '../shared/social-icons/social-icons.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContactsRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      defaultLanguage:'bg'
    }),
  ],
  exports: [],
})
export class ContactsModule {}
