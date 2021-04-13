import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { AuthPageComponent } from './auth-page.component';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateTestingModule } from '../../../testing/translate-testing.module';
import { LandingPageComponent } from './../../../landing/containers/landing-page/landing-page.component';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;
  let router: Router;

  const routes = [
      { path: '', component: LandingPageComponent }
  ] as Routes;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

    TestBed.configureTestingModule({
        declarations: [ AuthPageComponent, LandingPageComponent ],
        imports: [
            SharedModule,
            TranslateTestingModule,
            RouterTestingModule.withRoutes(routes)
        ],
        providers: [
            FormsModule,
            BrowserModule,
            ReactiveFormsModule,
            provideMockStore({ initialState }),
            { provide: ComponentFixtureAutoDetect, useValue: true }
        ],
        schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(AuthPageComponent);
        component = fixture.componentInstance;
    });

    it('should navigate to landing', fakeAsync(() => {
        fixture.debugElement.query(By.css('.auth-logo')).nativeElement.click();
        tick();

        expect(router.url).toBe('/');
    }));
});
