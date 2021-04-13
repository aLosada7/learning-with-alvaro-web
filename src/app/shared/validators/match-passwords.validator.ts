import { ValidatorFn, FormControl, FormGroup } from '@angular/forms';

export const matchPasswordValidator: ValidatorFn = (fb: FormGroup) => {
    let password = fb.get('password').value;
    let repeatedPassword = fb.get('repeatedPassword').value;

    return password === repeatedPassword ? null
    : {
      notSame: true
    };
}
