import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { AuthPageActions } from '../../actions';

import * as fromAuth from '../../reducers';
import { Identity } from './../../models/identity.enum';

@Component({
  selector: 'tms-auth-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth-page.component.html'
})
export class AuthPageComponent implements OnInit, OnDestroy {

    identityEnum = Identity;
    params: Params;

    authLoading$ = this.store.pipe(select(fromAuth.getLoading));
    authResult$ = this.store.pipe(select(fromAuth.getAuthResult));
    error$ = this.store.pipe(select(fromAuth.getSignUpPageError));
    identitySelected$: BehaviorSubject<Identity> = new BehaviorSubject(null);

    subscriptionIdentity: Subscription;
    subscriptionLoadData: Subscription;

    constructor(private route: ActivatedRoute,
        private store: Store<fromAuth.State>) { }

    ngOnInit(): void {
        this.subscriptionIdentity = this.route.params.subscribe(params => {
            this.params = params;
            this.identitySelected$.next(params['identity']);
        })

        this.subscriptionLoadData = this.route.queryParams.pipe(
            take(1)
          ).subscribe(params => {
            this.params = params;
            if(this.params['evldr']) this.submitted(this.identityEnum.EmailVerification, this.params['evldr'])
        })
    }

    submitted(type: Identity, form: any) {
        switch (type) {
            case Identity.Login: {
                this.store.dispatch(new AuthPageActions.Login(form));
                break;
            }
            case Identity.SignUp: {
                this.store.dispatch(new AuthPageActions.SignUp(form));
                break;
            }
            case Identity.EmailVerification: {
                this.store.dispatch(new AuthPageActions.EmailConfirmation(form));
                break;
            }
            case Identity.ForgotPassword: {
                this.store.dispatch(new AuthPageActions.RecoverPassword(form));
                break;
            }
            case Identity.CreatePassword: {
                this.store.dispatch(new AuthPageActions.CreatePassword({...form, newPasswordToken: this.params['pvldr']}));
                break;
            }
        }
    }

    changeOption(option: Identity) {
        this.identitySelected$.next(option);
    }

    ngOnDestroy() {
        if (this.subscriptionIdentity) this.subscriptionIdentity.unsubscribe();
        if (this.subscriptionLoadData) this.subscriptionLoadData.unsubscribe();
    }

}
