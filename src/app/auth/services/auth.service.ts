import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService{

    signUp(payload: any) {
        return this.http.post(`${environment.apiUrl}/v1/auth/user`, payload);
    }

    login(payload: any) {
        return this.http.post(`${environment.apiUrl}/v1/auth/login`, payload);
    }

    emailConfirmation(validationToken: string) {
        return this.http.post(`${environment.apiUrl}/v1/auth/email/confirmation?evldr=${validationToken}`, {});
    }

    recoverPassword(payload: any) {
        return this.http.post(`${environment.apiUrl}/v1/auth/password/request`, payload);
    }

    createNewPassword(payload: any) {
        return this.http.post(`${environment.apiUrl}/v1/auth/password/create?pvldr=${payload.newPasswordToken}`, { password: payload.password});
    }

    constructor(private http: HttpClient) { }
}
