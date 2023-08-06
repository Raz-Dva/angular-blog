import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "src/app/pages/home/home.component";
import {SingleCategoryComponent} from "src/app/pages/single-category/single-category.component";
import {SinglePostComponent} from "src/app/pages/single-post/single-post.component";
import {AboutUsComponent} from "src/app/pages/about-us/about-us.component";
import {TermsAndConditionsComponent} from "src/app/pages/terms-and-conditions/terms-and-conditions.component";
import {ContactUsComponent} from "src/app/pages/contact-us/contact-us.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'category', component: SingleCategoryComponent},
  {path: 'post', component: SinglePostComponent},
  {path: 'about', component: AboutUsComponent},
  {path: 'term-conditions', component: TermsAndConditionsComponent},
  {path: 'contact', component: ContactUsComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class AppRoutingModule { }
