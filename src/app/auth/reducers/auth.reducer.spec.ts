/*import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TestScheduler } from 'rxjs/testing';
import { StoreModule } from '@ngrx/store';*/

import { AuthPageActions, AuthApiActions  } from '../actions'
import * as fromAuthReducer from '../reducers/auth.reducer';

describe('auth reducer', () => {
    describe('Sign up reducer', () => {

        it('loading a true when sign up starts', () => {
            const { initialState } = fromAuthReducer;
            const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
            const action = new AuthPageActions.SignUp(payload);
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeTruthy();
        })

        it('loading a false when sign up ends and no error', () => {
            const { initialState } = fromAuthReducer;
            const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
            const action = new AuthApiActions.SignUpSuccess();
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).toBeNull();
        })

        it('loading a false when sign up ends and error', () => {
            const { initialState } = fromAuthReducer;
            const error = "Email already exists.";
            const action = new AuthApiActions.SignUpFailure({ error });
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).not.toBeNull();
        });

    });

    describe('Login reducer', () => {

        it('loading a true when login starts', () => {
            const { initialState } = fromAuthReducer;
            const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
            const action = new AuthPageActions.Login(payload);
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeTruthy();
        })

        it('loading a false when login ends and no error', () => {
            const { initialState } = fromAuthReducer;
            const payload = { email: "aldc30sc@gmail.com", password: "A12345alosada" };
            const action = new AuthApiActions.LoginSuccess();
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).toBeNull();
        })

        it('loading a false when login ends and error', () => {
            const { initialState } = fromAuthReducer;
            const error = "Wrong credentials.";
            const action = new AuthApiActions.LoginFailure({ error });
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).not.toBeNull();
        });

    });

    describe('Recover password reducer', () => {

        it('loading a true when recover password starts', () => {
            const { initialState } = fromAuthReducer;
            const payload = { email: "aldc30sc@gmail.com" };
            const action = new AuthPageActions.RecoverPassword(payload);
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeTruthy();
        })

        it('loading a false when recover password ends and no error', () => {
            const { initialState } = fromAuthReducer;
            const action = new AuthApiActions.RecoverPasswordSuccess();
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).toBeNull();
        })

        it('loading a false when recover password ends and error', () => {
            const { initialState } = fromAuthReducer;
            const error = "Wrong credentials.";
            const action = new AuthApiActions.RecoverPasswordFailure({ error });
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).not.toBeNull();
        });

    });

    describe('create password reducer', () => {

        it('loading to true when create passwordstarts', () => {
            const { initialState } = fromAuthReducer;
            const payload = { password: "A123alvaro", repeatedPassword: "A123alvaro" };
            const action = new AuthPageActions.CreatePassword(payload);
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeTruthy();
        })

        it('loading to false when create password ends and no error', () => {
            const { initialState } = fromAuthReducer;
            const action = new AuthApiActions.CreatePasswordSuccess();
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).toBeNull();
        })

        it('loading to false when create password ends and error', () => {
            const { initialState } = fromAuthReducer;
            const error = "Wrong credentials.";
            const action = new AuthApiActions.CreatePasswordFailure({ error });
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).not.toBeNull();
        });

    });

    describe('Email confirmation reducer', () => {

        it('loading a true when remail confirmation starts', () => {
            const { initialState } = fromAuthReducer;
            const payload = { email: "aldc30sc@gmail.com" };
            const action = new AuthPageActions.EmailConfirmation(payload);
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeTruthy();
        })

        it('loading a false when email confirmationends and no error', () => {
            const { initialState } = fromAuthReducer;
            const action = new AuthApiActions.EmailConfirmationSuccess();
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).toBeNull();
        })

        it('loading a false when email confirmation ends and error', () => {
            const { initialState } = fromAuthReducer;
            const error = "Wrong credentials.";
            const action = new AuthApiActions.EmailConfirmationFailure({ error });
            const state = fromAuthReducer.reducer(initialState, action);

            expect(state.loading).toBeFalsy();
            expect(state.error).not.toBeNull();
        });

    });
});
