import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By, BrowserModule } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { SignUpComponent } from './sign-up.component';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { SharedModule } from '../../../shared/shared.module';
import { getSignUpPageError } from '../../reducers';
import { TranslateTestingModule } from 'src/app/testing/translate-testing.module';

let component: SignUpComponent;
let fixture: ComponentFixture<SignUpComponent>;

describe('SignUpPageComponent', () => {
    let h2: HTMLElement;
    const emailExistsError = "Email already exists.";

	beforeEach(async(() => {
        const { initialState } = fromAuthReducer;

		TestBed.configureTestingModule({
			declarations: [ SignUpComponent ],
			imports: [ SharedModule, TranslateTestingModule ],
			providers: [
				FormsModule,
				BrowserModule,
                ReactiveFormsModule,
                provideMockStore({ initialState,
                selectors: [
                    { selector: getSignUpPageError, value: emailExistsError}
                ] }),
                { provide: ComponentFixtureAutoDetect, useValue: true }
			],
			schemas: [NO_ERRORS_SCHEMA]
		})
        .compileComponents();

	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SignUpComponent);
        component = fixture.componentInstance;

        component.ngOnInit();

        h2= fixture.nativeElement.querySelector('h2');
		//fixture.detectChanges();
		//form = fixture.debugElement.query(By.css("form"));
		//element = form.nativeElement;
    });

	it('valid email', () => {
		const email = "aldc30sc@gmail.com";
		component.signUpForm.controls['email'].setValue(email);
		expect(component.signUpForm.controls['email'].errors?.password).toBeUndefined();
	})

	it('not valid email', () => {
		const email = "aldc30sc";
		component.signUpForm.controls['email'].setValue(email);
		expect(component.signUpForm.controls['email'].errors?.email).toBe("aldc30sc");
	})

	// password requirements: 8 characters, 1 capital letter, 1 uppercase letter, 1 number
	it('password valid', () => {
		const password = "A123hello";
		component.signUpForm.controls['password'].setValue(password);
		expect(component.signUpForm.controls['password'].errors?.password).toBeUndefined();
	})

	it('password valid with different path', () => {
		const password = "123Hello";
		component.signUpForm.controls['password'].setValue(password);
		expect(component.signUpForm.controls['password'].errors?.password).toBeUndefined();
	})

	it('not valid passwords', () => {
		const password = "a123hello";
		component.signUpForm.controls['password'].setValue(password);
		expect(component.signUpForm.controls['password'].errors?.password).not.toBeUndefined();
    });

    it("valid name and surname", () => {
        component.signUpForm.controls['surnames'].setValue("");
        expect(component.signUpForm.controls['surnames'].valid).toBeFalsy();
        expect(component.signUpForm.controls['surnames'].hasError('required')).toBeTruthy();
        component.signUpForm.controls['surnames'].setValue("Alvaro");
        expect(component.signUpForm.controls['surnames'].valid).toBeTruthy();
    })

	it('valid form', () => {
        component.signUpForm.controls['email'].setValue("alos@gmail.com");
        component.signUpForm.controls['name'].setValue("Alvaro");
        component.signUpForm.controls['surnames'].setValue("Losada");
        component.signUpForm.controls['password'].setValue("A123hello");
        component.signUpForm.controls['repeatedPassword'].setValue("otherpassword");
        expect(component.signUpForm.valid).toBeFalsy();
        component.signUpForm.controls['repeatedPassword'].setValue("A123hello");
        expect(component.signUpForm.valid).toBeTruthy();
    });

    it('method launched when form submitted', () => {
        jest.spyOn(component, 'signUp')
        fixture.debugElement.query(By.css('#sign-up-form')).triggerEventHandler('submit', null);

        expect(component.signUp).toHaveBeenCalled()
    });

    /*it('component updates when sign up fails', () => {

        const errorElement = fixture.debugElement.query(By.css("#authError"));

        expect(errorElement.nativeElement.textContent).toEqual(emailExistsError);
    })*/
});
