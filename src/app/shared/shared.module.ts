import { AboutPageComponent } from './pages/about-page/about-page.component';
import { HomePageComponent } from './pages/homePage/home-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AboutPageComponent,
    HomePageComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AboutPageComponent,
    HomePageComponent,
  ]
})
export class SharedModule { }
