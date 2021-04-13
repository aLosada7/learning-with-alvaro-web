import { Identity } from './../../models/identity.enum';
import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tms-auth-options',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './auth-options.component.html'
})
export class AuthOptionsComponent implements OnInit {

    @Input() active;

    constructor() {}

    ngOnInit(): void {
    }

}
