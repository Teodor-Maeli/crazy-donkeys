import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookiePolicyRoutingModule } from './cookie-policy-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CookiePolicyComponent } from './cookie-policy.component';


@NgModule({
  declarations: [CookiePolicyComponent],
  imports: [
    CommonModule,
    CookiePolicyRoutingModule,
    SharedModule,
  ],
  exports:[]
})
export class CookiePolicyModule { }
