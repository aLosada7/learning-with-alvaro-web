import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Params } from '@angular/router';

import { matchPasswordValidator } from 'src/app/shared/validators/match-passwords.validator';

@Component({
  selector: 'tms-password-create',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './password-create.component.html'
})
export class PasswordCreateComponent implements OnInit {

    @Input() authResult;

    @Output() submitted;

    createPasswordForm: FormGroup;

    constructor(private fb: FormBuilder) {
            // Initialize
            this.submitted = new EventEmitter();
        }

    ngOnInit(): void {
        this.createPasswordForm = this.fb.group(
            {
                password: ['', [Validators.required]],
                repeatedPassword: ['', [Validators.required]],
            },
            { validator: matchPasswordValidator }
        );
    }

    createPassword() {
        if (this.createPasswordForm.valid) {
            const user = {
                password: this.createPasswordForm.get("password").value
            }
            this.submitted.emit(user);
        }
    }

}
