import { ValidatorFn, FormControl } from '@angular/forms';

export const passwordValidator: ValidatorFn = (control: FormControl) => {
    let EMAIL_REGEXP = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

    return EMAIL_REGEXP.test(control.value) ? null
    : {
      password : control.value
    };
}
