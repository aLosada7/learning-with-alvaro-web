import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { EffectsModule } from '@ngrx/effects';
import { MasterEffects } from './effects/master.effects';
import { reducers } from '../reducers';
import { StoreModule } from '@ngrx/store';

export const COMPONENTS = [
    ToolbarComponent
]
@NgModule({
  declarations: [COMPONENTS],
  imports: [
    SharedModule,
    CommonModule,
    StoreModule.forFeature('core', reducers),
    EffectsModule.forFeature([MasterEffects])
  ],
  exports: [
    COMPONENTS
  ]
})
export class CoreModule { }
