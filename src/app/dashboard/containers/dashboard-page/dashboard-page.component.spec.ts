import { ActivatedRouteStub } from './../../../testing/activated-routing-stub';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of, ReplaySubject } from 'rxjs';
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardPageComponent } from './dashboard-page.component';
import { doesNotReject } from 'assert';
import { MenuComponent } from '../../components/menu/menu.component';

let component: DashboardPageComponent;
let fixture: ComponentFixture<DashboardPageComponent>;
let activatedRoute: ActivatedRouteStub;

describe('DashboardPageComponent', () => {
    const initialState = {
        allElements: [],
        filters: []
    };

    beforeEach(() => {
        activatedRoute = new ActivatedRouteStub();
    });

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DashboardPageComponent, MenuComponent ],
            imports: [
                SharedModule,

            ],
            providers: [
                provideMockStore({ initialState }),
                {provide: ActivatedRoute, useValue: activatedRoute},
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        })
        .compileComponents();
    }));

    it('receives category and subcategory from query string', () => {
        activatedRoute.setQueryParamMap({ category: 1, subcategory: 1 });
        createComponent().then(() => {
            component.category$.subscribe((value) => {
                expect(value.category).toEqual(1);
                expect(value.subcategory).toEqual(1);
            })

        });
    })
});

function createComponent() {
    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;

    // 1st change detection triggers ngOnInit
    fixture.detectChanges();
    return fixture.whenStable().then(() => {
      // 2nd change detection displays the async-fetched hero
      fixture.detectChanges();
    });
}
