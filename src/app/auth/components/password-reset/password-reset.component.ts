import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { emailValidator } from '../../../shared/validators/email.validator';

@Component({
  selector: 'tms-password-reset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './password-reset.component.html'
})
export class PasswordResetComponent implements OnInit {

    @Input() authResult;

    @Output() submitted;

    passwordResetForm: FormGroup;

    constructor(private fb: FormBuilder) {
            // Initialize
            this.submitted = new EventEmitter();
        }

    ngOnInit(): void {
        this.passwordResetForm = this.fb.group(
            {
                email: ['', [Validators.required, emailValidator]],
            }
        );
    }

    passwordReset() {
        if (this.passwordResetForm.valid) {
            const user = {
                email: this.passwordResetForm.get("email").value
            }
            this.submitted.emit(user);
        }
    }

}
