import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

    /*private _userService: UserService;

    public get userService(): UserService {
        if (!this._userService) {
        this._userService = this.injector.get(UserService);
        }

        return this._userService;
    }

    constructor(private injector: Injector) { }

    arePasswordsEqual(password: string, repeatedPassword: string) {
        this._userService.arePasswordsEqual(password, repeatedPassword);
    }*/

}
