import { Category } from './../models/category.model';
import { Action } from '@ngrx/store';

export enum MasterActionTypes {
    GetCategories = '[Master] Get Categories',
    GetCategoriesSuccess = '[Master] Get Categories Success',
    GetCategoriesFailure = '[Master] Get Categories Failure',
}

export class GetCategories implements Action {
    type = MasterActionTypes.GetCategories;

    constructor(public payload?: any) {}
}

export class GetCategoriesSuccess implements Action {
    type = MasterActionTypes.GetCategoriesSuccess;

    constructor(public payload: Category[]) {}
}

export class GetCategoriesFailure implements Action {
    type = MasterActionTypes.GetCategoriesFailure;

    constructor(public payload: { error: any }) {}
}

export type MasterActionsUnion = GetCategories | GetCategoriesSuccess | GetCategoriesFailure;
