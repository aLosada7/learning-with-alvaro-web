import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, ReplaySubject } from 'rxjs';

import { MasterEffects } from './master.effects';
import { MasterService } from '../services/master.service';
import { mockCategories } from '../services/mockCategory';
import { MasterActions } from '../actions';

let masterService = {
    getCategories: jest.fn()
};

describe('MasterEffects', () => {
    let actions$;
    let effects: MasterEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
        providers: [
            MasterEffects,
            provideMockActions(() => actions$),
            { provide: MasterService, useValue: masterService }
        ]
        });
        effects = TestBed.inject(MasterEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });

    it('should return an SIGN_UP_SUCCESS action', async done => {

        masterService.getCategories.mockReturnValue(of(mockCategories));

        actions$ = new ReplaySubject(1);
        actions$.next(new MasterActions.GetCategories());

        effects.onGetCategories$().subscribe(action => {
            expect(action).toEqual({
                type: '[Master] Get Categories Success',
                payload: mockCategories
            });
            done();
        });
    });
});
