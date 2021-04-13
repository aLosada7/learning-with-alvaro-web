import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import * as fromAuth from './auth.reducer';
export interface AuthState {
    auth: fromAuth.State
}

export interface State extends fromRoot.State {
    auth: AuthState;
}

export const reducers: ActionReducerMap<
  AuthState,
  any
> = {
    auth: fromAuth.reducer
};

export const selectAuthState = createFeatureSelector<State, AuthState>('auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.auth
);

export const getLoading = createSelector(
    selectAuthStatusState,
    fromAuth.getLoading
);

export const getAuthResult = createSelector(
    selectAuthStatusState,
    fromAuth.getAuthResult
);

export const getSignUpPageError = createSelector(
    selectAuthStatusState,
    fromAuth.getAuthError
);
