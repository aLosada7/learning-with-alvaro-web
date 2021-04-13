import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Category } from 'src/app/core/models/category.model';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'tms-landing-page',
  templateUrl: './landing-page.component.html'
})
export class LandingPageComponent implements OnInit {

    categories$: Observable<Category[]>;

    constructor(private store: Store<fromRoot.State>) {
        this.categories$ = store.pipe(select(fromRoot.getCategories));
    }

    ngOnInit(): void {
    }

}
