import { HttpRequestInterceptorMock } from './services/httpInterceptorMock.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material'
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { VerticalStepperComponent } from './components/vertical-stepper/vertical-stepper.component';
import { LoadingComponent } from './components/loading/loading.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const COMPONENTS = [
    VerticalStepperComponent,
    LoadingComponent
]
@NgModule({
  declarations: [COMPONENTS],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: HttpRequestInterceptorMock, multi: true }],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ReactiveFormsModule,
    COMPONENTS
  ]
})
export class SharedModule { }
