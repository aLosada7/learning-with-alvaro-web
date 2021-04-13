import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { provideMockStore } from '@ngrx/store/testing';


import { SharedModule } from 'src/app/shared/shared.module';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { PasswordResetComponent } from './password-reset.component';
import { TranslateTestingModule } from 'src/app/testing/translate-testing.module';

describe('PasswordResetPageComponent', () => {
  let component: PasswordResetComponent;
    let fixture: ComponentFixture<PasswordResetComponent>;

    beforeEach(async(() => {
        const { initialState } = fromAuthReducer;

        TestBed.configureTestingModule({
        declarations: [ PasswordResetComponent ],
        imports: [
            SharedModule,
            TranslateTestingModule,
            RouterTestingModule.withRoutes([])
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
        fixture = TestBed.createComponent(PasswordResetComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('valid form', () => {
        component.passwordResetForm.controls['email'].setValue("hey");
        expect(component.passwordResetForm.valid).toBeFalsy();
        component.passwordResetForm.controls['email'].setValue("aldc30sc@gmail.com");
        expect(component.passwordResetForm.valid).toBeTruthy();
    });

    /*it('gets param', () => {
        const paramEmitted = jest.spyOn(component.submitted, 'emit');
        component.passwordReset();

        expect(paramEmitted).toHaveBeenCalled();
    });*/
});
