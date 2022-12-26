import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from 'src/app/shared/nav/nav.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  declarations: [NavComponent, FooterComponent, HomeComponent],
  imports: [CommonModule],
  exports: [NavComponent, FooterComponent, HomeComponent],
})
export class SharedModule {}
