import { BehaviorSubject, Observable } from 'rxjs';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Params } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { map, take } from 'rxjs/operators';

import { Category } from 'src/app/core/models/category.model';
import { Subcategory } from 'src/app/core/models/subcategory.model';
import { MenuComponent } from '../../components/menu/menu.component';
import * as fromRoot from '../../../reducers';
import * as fromDashboard from '../../reducers/dashboard.reducer';

export interface SelectedCategory {
    category: number;
    subcategory: number;
}

@Component({
  selector: 'tms-dashboard-page',
  templateUrl: './dashboard-page.component.html'
})
export class DashboardPageComponent implements OnInit, AfterViewInit {

    @ViewChild(MenuComponent)
    dashboardMenu: MenuComponent;

    categories$: Observable<Category[]>;
    loading$: Observable<boolean>;

    public category$: Observable<SelectedCategory>;

    constructor(private route: ActivatedRoute,
        private store: Store<fromDashboard.State>) {
        this.category$ = this.route.queryParamMap.pipe(
            map((params: ParamMap): SelectedCategory => {
                const catParam: string | undefined = params.get('category');
                const category: number = Number(catParam);
                if (Number.isNaN(category)) {
                    // Or do you want a default value instead?
                    throw new Error(`Query Parameter 'cat' invalid: '${catParam}'`);
                }
                const subParam: string | undefined = params.get('subcategory');
                const subcategory: number = Number(subParam);
                if (Number.isNaN(subcategory)) {
                    // Or do you want a default value instead?
                    throw new Error(`Query Parameter 'sub' invalid: '${subParam}'`);
                }
                return { category, subcategory };
            })
        );

        this.categories$ = store.pipe(select(fromRoot.getCategories));
    }

    ngOnInit(): void {

    }

    ngAfterViewInit() {
        console.log('dashboardMenu', this.dashboardMenu);
    }

}
