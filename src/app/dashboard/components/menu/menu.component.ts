import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tms-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

    @Input() categories;
    @Input() categorySelected;

    constructor() { }

    ngOnInit(): void {
    }

    handleSubcategoryNavigation($event: MouseEvent) {
        $event.stopPropagation();
    }

}
