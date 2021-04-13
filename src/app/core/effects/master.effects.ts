import { Category } from './../models/category.model';
import { MasterService } from './../services/master.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { MasterActions } from '../actions';
import { of } from 'rxjs';



@Injectable()
export class MasterEffects {

    @Effect()
    onGetCategories$ = (): Observable<
    Action
    > =>
    this.actions$.pipe(
      ofType<MasterActions.GetCategories>(
        MasterActions.MasterActionTypes.GetCategories
      ),
      switchMap(() => {
        return this.masterService.getCategories().pipe(
          map((res: Category[]) => new MasterActions.GetCategoriesSuccess(res)),
          catchError(err => of(new MasterActions.GetCategoriesFailure(err.error ? err.error.error : err)))
        );
      })
    );


    constructor(private actions$: Actions,
        private masterService: MasterService) {}

}
