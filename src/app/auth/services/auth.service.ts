import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    signUp(payload: any) {
        return this.http.post('http://localhost:5000/v1/auth/register', payload);
    }

    emailConfirmation(validationToken: string) {
        return this.http.post(`http://localhost:5000/v1/auth/confirmRegister?evldr=${validationToken}`, {});
    }

  constructor(private http: HttpClient) { }
}
