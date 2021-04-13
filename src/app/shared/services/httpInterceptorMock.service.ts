import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { environment } from '../../../environments/environment';
import { mockCategories } from './../../core/services/mockCategory';

@Injectable({
    providedIn: 'root'
})
export class HttpRequestInterceptorMock implements HttpInterceptor {
    constructor(private injector: Injector) {}

    intercept(request: HttpRequest<any>, next: HttpHandler):
              Observable<HttpEvent<any>> {
        if (request.url && request.url.indexOf(`${environment.apiUrl}/v1/categories`) > -1) {
            return of(new HttpResponse({ status: 200, body: mockCategories }));
        }

        return next.handle(request);
    }
}
