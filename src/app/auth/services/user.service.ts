import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { User } from '../../core/models/user.model';
import { Adapter } from '../../core/models/adapter';

@Injectable({
  providedIn: 'root'
})
export class UserService implements Adapter<User>{

    getMe() {
        return this.http.get(`${environment.apiUrl}/v1/auth/user`)
    }

    adapt(user: any): User {
        return new User(user.id, user.name, user.lastName, user.email);
    }

  constructor(private http: HttpClient) { }
}
