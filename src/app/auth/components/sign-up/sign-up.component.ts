import { MyErrorStateMatcher } from '../../../shared/validators/error-state-matcher';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../../../shared/validators/email.validator';
import { passwordValidator } from '../../../shared/validators/password.validator';
import { matchPasswordValidator } from '../../../shared/validators/match-passwords.validator';

@Component({
  selector: 'tms-sign-up',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sign-up.component.html'
})
export class SignUpComponent implements OnInit {

    @Input() authResult;

    @Output() submitted;

    signUpForm: FormGroup;

    constructor(private fb: FormBuilder) {
        // Initialize
        this.submitted = new EventEmitter();
    }

    ngOnInit(): void {
        this.signUpForm = this.fb.group(
        {
            email: ['', [Validators.required, emailValidator]],
            name: ['', [Validators.required]],
            surnames: ['', [Validators.required]],
            password: ['', [Validators.required, passwordValidator]],
            repeatedPassword: ['', [Validators.required]]
        },
        { validator: matchPasswordValidator }
        );
    }

    matcher = new MyErrorStateMatcher();

    signUp() {
        if (this.signUpForm.valid) {
            const user = {
                email: this.signUpForm.get("email").value,
                password: this.signUpForm.get("password").value,
                name: this.signUpForm.get("name").value,
                lastName: this.signUpForm.get("surnames").value,
            }
            this.submitted.emit(user);
        }
    }
}
