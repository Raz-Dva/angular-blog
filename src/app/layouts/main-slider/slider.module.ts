import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainSliderComponent} from "src/app/layouts/main-slider/main-slider.component";
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ng-gallery/lightbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MainSliderComponent],
  imports: [
    CommonModule,
    GalleryModule,
    LightboxModule,
    BrowserAnimationsModule
  ],
  exports: [MainSliderComponent]
})
export class SliderStandaloneModule { }
