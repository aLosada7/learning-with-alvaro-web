import { MasterActions  } from '../actions'
import * as fromMasterReducer from '../reducers/masters.reducer';
import { mockCategories } from '../services/mockCategory';

describe('auth reducer', () => {
    describe('Sign up reducer', () => {
        const { initialState } = fromMasterReducer;

        it('loading a true when sign up starts', () => {
            const action = new MasterActions.GetCategories();
            const state = fromMasterReducer.reducer(initialState, action);

            expect(state.categories).toEqual([]);
        })

        it('loading a false when sign up ends and no error', () => {
            const action = new MasterActions.GetCategoriesSuccess(mockCategories);
            const state = fromMasterReducer.reducer(initialState, action);

            expect(state.categories).not.toEqual([]);
            expect(JSON.stringify(state.categories)).toEqual(JSON.stringify(mockCategories))
        })

        it('loading a false when sign up ends and error', () => {
            const error = "There was an error.";
            const action = new MasterActions.GetCategoriesFailure({ error });
            const state = fromMasterReducer.reducer(initialState, action);

            expect(state.categories).toEqual([]);
        });

    });
});
