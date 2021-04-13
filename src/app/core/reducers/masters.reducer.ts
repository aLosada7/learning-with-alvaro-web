import { Category } from './../models/category.model';
import { MasterActions } from '../actions';

export interface State {
    categories: Category[]
}

export const initialState: State = {
    categories: []
};

export function reducer(
  state = initialState,
  action: MasterActions.MasterActionsUnion
): State {
    switch (action.type) {
        case MasterActions.MasterActionTypes.GetCategoriesSuccess: {
            return {
                ...state,
                categories: action.payload
            }
        }
        case MasterActions.MasterActionTypes.GetCategoriesFailure: {
            return {
                ...state,
                categories: []
            }
        }
        default: {
            return state;
        }
    }
}
export const getCategories = (state: State) => state.categories;


