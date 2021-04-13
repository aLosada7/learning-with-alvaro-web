import { AuthOptionsComponent } from './auth-options.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import * as fromAuthReducer from '../../reducers/auth.reducer';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateTestingModule } from '../../../testing/translate-testing.module';
import { Router, Routes } from '@angular/router';
import { AuthPageComponent } from '../../containers/auth-page/auth-page.component';

describe('AuthPageComponent', () => {
  let component: AuthOptionsComponent;
  let fixture: ComponentFixture<AuthOptionsComponent>;
  let router: Router;

    const routes = [
        { path: 'identity/:identity', component: AuthOptionsComponent }
    ] as Routes;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

    TestBed.configureTestingModule({
        declarations: [ AuthOptionsComponent, AuthPageComponent ],
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
        fixture = TestBed.createComponent(AuthOptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should navigate to login', fakeAsync(() => {

        fixture.debugElement.query(By.css('.login-option')).nativeElement.click();
        tick();

        expect(router.url).toBe(`/identity/login`);
    }));

    it('should navigate to sign up', fakeAsync(() => {

        fixture.debugElement.query(By.css('.sign-up-option')).nativeElement.click();
        tick();

        expect(router.url).toBe(`/identity/signup`);
    }));
});
