import { ValidatorFn, FormControl } from '@angular/forms';

export const emailValidator: ValidatorFn = (control: FormControl) => {
    let EMAIL_REGEXP = /\S+@\S+\.\S+/;

    return EMAIL_REGEXP.test(control.value) ? null
    : {
      email : control.value
    };
}
