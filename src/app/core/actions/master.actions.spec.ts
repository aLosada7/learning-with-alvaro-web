import { MasterActions } from '../actions';
import { mockCategories } from '../services/mockCategory';
import { MasterActionTypes } from './master.actions';

describe('master actions', () => {
    describe('categories actions', () => {
        it('launch get categories action', () => {
            const action = new MasterActions.GetCategories();

            expect(action.type).toEqual(MasterActionTypes.GetCategories);
            expect({...action}).toEqual({
                type: MasterActionTypes.GetCategories
            })
        })

        it('success get categories action', () => {
            const action = new MasterActions.GetCategoriesSuccess(mockCategories);

            expect({...action}).toEqual({
                type: MasterActionTypes.GetCategoriesSuccess,
                payload: mockCategories
            })
        });

        it('failure get categories action', () => {

            const error = "Categories not obtained.";
            const action = new MasterActions.GetCategoriesFailure({ error });

            expect({...action}).toEqual({
                type: MasterActionTypes.GetCategoriesFailure,
                payload: { error }
            })

        });
    })
})
