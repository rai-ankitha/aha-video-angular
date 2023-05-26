import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { OrangeButtonComponent } from './components/common/orange-button/orange-button.component';
import {HttpClientModule } from '@angular/common/http';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ImageSliderCardComponent } from './components/image-slider-card/image-slider-card.component';
import { SliderComponent } from './components/slider/slider.component';
// import { NgImageSliderModule } from 'ng-image-slider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ActorsCardComponent } from './components/actors-card/actors-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    NotFoundComponent,
    OrangeButtonComponent,
    CarouselComponent,
    ImageSliderCardComponent,
    SliderComponent,
    ActorsCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  
    CarouselModule,
   
    // NgImageSliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
