import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';
import { Router, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { LoginComponent } from './login.component';
import { TranslateTestingModule } from 'src/app/testing/translate-testing.module';
import { AuthPageComponent } from '../../containers/auth-page/auth-page.component';

describe('LoginPageComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let router: Router;

    const routes = [
        { path: 'identity/:identity', component: AuthPageComponent }
    ] as Routes;

  beforeEach(async(() => {
    const { initialState } = fromAuthReducer;

    TestBed.configureTestingModule({
        declarations: [ LoginComponent, AuthPageComponent ],
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
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('valid form', () => {
        component.loginForm.controls['email'].setValue("alos@gmail.com");
        component.loginForm.controls['password'].setValue("");
        expect(component.loginForm.valid).toBeFalsy();
        component.loginForm.controls['password'].setValue("A123alvaro");
        expect(component.loginForm.valid).toBeTruthy();
    });

    it('method launched when form submitted', () => {
        jest.spyOn(component, 'login')
        fixture.debugElement.query(By.css('#login-form')).triggerEventHandler('submit', null);

        expect(component.login).toHaveBeenCalled()
    });

    it('should navigate to forget password', fakeAsync(() => {
        fixture.debugElement.query(By.css('.forgotten-password__link')).nativeElement.click();
        tick();

        expect(router.url).toBe('/identity/forgotpassword');
    }));
});
