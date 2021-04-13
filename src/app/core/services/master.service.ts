import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { State } from 'src/app/reducers';

import { environment } from 'src/environments/environment';
import { Category } from '../models/category.model';
import * as fromRoot from '../../reducers';
import * as masterActions from '../actions/master.actions';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

    constructor(private http: HttpClient,
        private store: Store<fromRoot.State>,) { }

    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(`${environment.apiUrl}/v1/categories`);
    }

    dispatchMasterActions() {
        this.store.dispatch(new masterActions.GetCategories);
    }
}
