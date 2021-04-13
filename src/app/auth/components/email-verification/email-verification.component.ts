import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'tms-email-verification',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './email-verification.component.html'
})
export class EmailVerificationComponent implements OnInit {

    @Input() authResult;

    params: Params;

    subscriptionLoadData: Subscription;

    constructor() {
    }

    ngOnInit(): void {
    }
}
