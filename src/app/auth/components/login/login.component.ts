import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../../../shared/validators/email.validator';

@Component({
  selector: 'tms-login',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

    @Output() submitted;

    loginForm: FormGroup;

    constructor(private fb: FormBuilder) {
        // Initialize
        this.submitted = new EventEmitter();
    }

    ngOnInit(): void {
        this.loginForm = this.fb.group(
            {
                email: ['', [Validators.required, emailValidator]],
                password: ['', [Validators.required]],
            }
        );
    }

    login() {
        if (this.loginForm.valid) {
            const user = {
                email: this.loginForm.get("email").value,
                password: this.loginForm.get("password").value
            }
            this.submitted.emit(user);
        }
    }

}
