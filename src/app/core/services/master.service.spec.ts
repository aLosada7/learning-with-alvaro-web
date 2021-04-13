import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { MasterService } from './master.service';
import { Category } from '../models/category.model';
import { environment } from 'src/environments/environment';
import { mockCategories } from './mockCategory';
import { provideMockStore } from '@ngrx/store/testing';

describe('Master Service', () => {
    let httpTestingController: HttpTestingController
    let service: MasterService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                MasterService,
                provideMockStore({ })
            ]
        });

        httpTestingController = TestBed.inject(HttpTestingController);
        service = TestBed.inject(MasterService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    afterEach(() => {
        httpTestingController.verify();
    })

    describe('categories', () => {
        it('expect category data', () => {
            service.getCategories().subscribe((categories: Category[]) => {
                expect(categories).not.toBe(null);
                expect(JSON.stringify(categories)).toEqual(JSON.stringify(mockCategories));
            });

            const req = httpTestingController.expectOne(`${environment.apiUrl}/v1/categories`);
            req.flush(mockCategories);
        })
    })
});
