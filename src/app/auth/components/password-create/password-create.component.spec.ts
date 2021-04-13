import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, ComponentFixtureAutoDetect, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { SharedModule } from 'src/app/shared/shared.module';
import { TranslateTestingModule } from 'src/app/testing/translate-testing.module';
import * as fromAuthReducer from '../../reducers/auth.reducer';
import { PasswordCreateComponent } from './password-create.component';

describe('PasswordCreatePageComponent', () => {
  let component: PasswordCreateComponent;
  let fixture: ComponentFixture<PasswordCreateComponent>;

    beforeEach(async(() => {
        const { initialState } = fromAuthReducer;

        TestBed.configureTestingModule({
        declarations: [ PasswordCreateComponent ],
        imports: [ SharedModule, TranslateTestingModule ],
        providers: [
            FormsModule,
            BrowserModule,
            ReactiveFormsModule,
            provideMockStore({ initialState }),
            { provide: ComponentFixtureAutoDetect, useValue: true },
            { provide: ActivatedRoute, useValue: { queryParams: of({ pvldr: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImFsZGMzMHNjQGdtYWlsLmNvbSIsImlhdCI6MTYxMjg2NzQyMn0.zGmwZivfIL-8QprXz9xWeWHzpIFyRiVG5PoESQO_Hqk" }) }}
        ],
        schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
