import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingPageComponent } from './containers/landing-page/landing-page.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [LandingPageComponent, HeadlineComponent],
  imports: [
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
