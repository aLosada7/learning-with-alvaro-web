import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthEffects } from './effects/auth.effects';
import { reducers } from './reducers';
import { StoreModule } from '@ngrx/store';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { EmailVerificationComponent } from './components/email-verification/email-verification.component';
import { PasswordCreateComponent } from './components/password-create/password-create.component';
import { AuthOptionsComponent } from './components/auth-options/auth-options.component';
import { AuthPageComponent } from './containers/auth-page/auth-page.component';
import { LoginComponent } from './components/login/login.component';

export const COMPONENTS = [SignUpComponent, LoginComponent, PasswordResetComponent, EmailVerificationComponent, PasswordCreateComponent, AuthOptionsComponent, AuthPageComponent];

@NgModule({
  declarations: [COMPONENTS],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule { }
