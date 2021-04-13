import { AuthService } from './../services/auth.service';
import { Action, Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { asyncScheduler, Observable, of } from 'rxjs';
import { debounceTime, switchMap, map, catchError, tap } from "rxjs/operators";

import { AuthPageActions, AuthApiActions } from "../actions";
import { Router } from '@angular/router';
import * as fromRoot from '../../reducers';
import { UserService } from '../services/user.service';
import { User } from '../models/User';


@Injectable()
export class AuthEffects {

    @Effect()
    onSignUp$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.SignUp>(
        AuthPageActions.AuthPageActionTypes.SignUp
      ),
      debounceTime(debounce, scheduler),
      switchMap(action => {
        return this.authService.signUp(action.payload).pipe(
          map(res => new AuthApiActions.SignUpSuccess()),
          catchError(err => of(new AuthApiActions.SignUpFailure(err.error ? err.error : err)))
        );
      })
    );

    @Effect()
    onLogin$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.Login>(
        AuthPageActions.AuthPageActionTypes.Login
      ),
      debounceTime(debounce, scheduler),
      switchMap(action => {
        return this.authService.login(action.payload).pipe(
          map((res: any) => {
            localStorage.setItem("token", res.token);
            localStorage.setItem("tokenExpiration", new Date(new Date().getTime() + (86400 * 60)).toString());

            this.store.dispatch(new AuthPageActions.LoadUser());
            return new AuthApiActions.LoginSuccess()
          }),
          catchError(err => of(new AuthApiActions.LoginFailure(err.error ? err.error : err)))
        );
      })
    );

    @Effect()
    onLoadUser$ = (): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.Login>(
        AuthPageActions.AuthPageActionTypes.Login
      ),
      switchMap(action => {
        return this.userService.getMe().pipe(
          map((user: User) => {
            return new AuthApiActions.LoadUserSuccess(this.userService.adapt(user))
          }),
          catchError(err => of(new AuthApiActions.LoadUserFailure(err.error ? err.error.error : err)))
        );
      })
    );

    @Effect({ dispatch: false })
    onLoginSuccess$ = this.actions$.pipe(
    ofType(AuthApiActions.AuthApiActionTypes.LoginSuccess),
        tap(() => {
            this.router.navigate(['/']);
        })
    );

    @Effect()
    onEmailConfirmation$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.EmailConfirmation>(
        AuthPageActions.AuthPageActionTypes.EmailConfirmation
      ),
      debounceTime(debounce, scheduler),
      switchMap(action => {
        return this.authService.emailConfirmation(action.payload).pipe(
          map(res => new AuthApiActions.EmailConfirmationSuccess()),
          catchError(err => of(new AuthApiActions.EmailConfirmationFailure(err.error ? err.error : err)))
        );
      })
    );


    @Effect()
    onRecoverPassword$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.RecoverPassword>(
        AuthPageActions.AuthPageActionTypes.RecoverPassword
      ),
      debounceTime(debounce, scheduler),
      switchMap(action => {
        return this.authService.recoverPassword(action.payload).pipe(
          map(res => new AuthApiActions.RecoverPasswordSuccess()),
          catchError(err => of(new AuthApiActions.RecoverPasswordFailure(err.error ? err.error.error : err)))
        );
      })
    );

    @Effect()
    onCreatePassword$ = ({ debounce = 300, scheduler = asyncScheduler } = {}): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<AuthPageActions.CreatePassword>(
        AuthPageActions.AuthPageActionTypes.CreatePassword
      ),
      debounceTime(debounce, scheduler),
      switchMap(action => {
        return this.authService.createNewPassword(action.payload).pipe(
          map(res => new AuthApiActions.CreatePasswordSuccess()),
          catchError(err => of(new AuthApiActions.CreatePasswordFailure(err.error ? err.error.error : err)))
        );
      })
    );

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private userService: UserService,
        private store: Store<fromRoot.State>,
        private router: Router
    ) {}

}
