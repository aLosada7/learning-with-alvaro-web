import { asyncScheduler, ReplaySubject, throwError } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs/internal/observable/of';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore } from '@ngrx/store/testing';

import { AuthEffects } from './auth.effects';
import { AuthService } from './../services/auth.service';
import { AuthPageActions } from '../actions';
import * as fromAuthReducer from '../reducers/auth.reducer';

const authService = {
    signUp: jest.fn(),
    login: jest.fn(),
    emailConfirmation: jest.fn(),
    recoverPassword: jest.fn(),
    createNewPassword: jest.fn()
}

describe('Auth actions', () => {
    const { initialState } = fromAuthReducer;
    let actions$;
    let authEffects;
    const payload = {
        email: "aldc30sc@gmail.com",
        password: "A12345alosada",
        evldr: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZGMzMHNjQGdtYWlsLmNvbSIsImlhdCI6MTYxMjg2NzQyMn0.zGmwZivfIL-8QprXz9xWeWHzpIFyRiVG5PoESQO_Hqk",
        pvldr: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZGMzMHNjQGdtYWlsLmNvbSIsImlhdCI6MTYxMjg2NzQyMn0.zGmwZivfIL-8QprXz9xWeWHzpIFyRiVG5PoESQO_Hqk"
    }

    beforeEach(() => {
		TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientModule
            ],
			providers: [
                AuthEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState }),
                { provide: AuthService, useValue: authService }
			]
		})

        authEffects = TestBed.inject(AuthEffects)
    });

    it('should return an SIGN_UP_SUCCESS action', async done => {

        authService.signUp.mockReturnValue(of({}));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.SignUp(payload));

        authEffects.onSignUp$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Sign Up Success'
            });
            done();
        });
    });

    it('should return an SIGN_UP_FAILURE action', async done => {
        const error = 'Wrong credentials introduced';

        authService.signUp.mockReturnValue(throwError(error));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.SignUp(payload));

        authEffects.onSignUp$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Sign Up Failure',
              payload: error
            });
            done();
        });
    });

    it('should return an EMAIL_CONFIRMATION_SUCCESS action', async done => {

        authService.login.mockReturnValue(of({}));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.Login(payload));

        authEffects.onLogin$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Login Success'
            });
            done();
        });
    });

    it('should return an EMAIL_CONFIRMATION_SUCCESS action', async done => {

        authService.emailConfirmation.mockReturnValue(of({}));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.EmailConfirmation(payload));

        authEffects.onEmailConfirmation$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Email Confirmation Success'
            });
            done();
        });
    });

    it('should return an RECOVER_PASSWORD_SUCCESS action', async done => {

        authService.recoverPassword.mockReturnValue(of({}));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.RecoverPassword(payload));

        authEffects.onRecoverPassword$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Recover Password Success'
            });
            done();
        });
    });

    it('should return an CREATE_PASSWORD_SUCCESS action', async done => {

        authService.createNewPassword.mockReturnValue(of({}));

        actions$ = new ReplaySubject(1);
        actions$.next(new AuthPageActions.CreatePassword(payload));

        authEffects.onCreatePassword$({
            debounce: 300,
            scheduler: asyncScheduler,
        }).subscribe(action => {
            expect(action).toEqual({
              type: '[Auth/API] Create Password Success'
            });
            done();
        });
    });

});


