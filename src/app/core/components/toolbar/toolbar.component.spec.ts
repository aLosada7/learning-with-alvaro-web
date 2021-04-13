import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '../../../shared/shared.module';
import { TranslateTestingModule } from '../../../testing/translate-testing.module';
import { Router, Routes } from '@angular/router';
import { AuthPageComponent } from 'src/app/auth/containers/auth-page/auth-page.component';

describe('AuthPageComponent', () => {
    let component: ToolbarComponent;
    let fixture: ComponentFixture<ToolbarComponent>;
    let router: Router;

    const routes = [
        { path: 'identity/:identity', component: AuthPageComponent }
    ] as Routes;

    beforeEach(async(() => {

        TestBed.configureTestingModule({
            declarations: [ ToolbarComponent, AuthPageComponent ],
            imports: [
                SharedModule,
                TranslateTestingModule,
                RouterTestingModule.withRoutes(routes)
            ],
            providers: [
                FormsModule,
                BrowserModule,
                ReactiveFormsModule,
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ],
            schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        fixture = TestBed.createComponent(ToolbarComponent);
        component = fixture.componentInstance;
    });

    it('should navigate to login', fakeAsync(() => {
        fixture.debugElement.query(By.css('.login-link')).nativeElement.click();
        tick();

        expect(router.url).toBe(`/identity/login`);
    }));

    it('should navigate to login in mobile', fakeAsync(() => {
        fixture.debugElement.query(By.css('.login-link-mobile')).nativeElement.click();
        tick();

        expect(router.url).toBe(`/identity/login`);
    }));
});
