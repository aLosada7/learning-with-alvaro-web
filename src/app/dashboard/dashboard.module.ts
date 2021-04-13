import { DashboardRouting } from './dashboard-routing.module';
import { DashboardPageComponent } from './containers/dashboard-page/dashboard-page.component';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';

export const COMPONENTS = [
    DashboardPageComponent,
    MenuComponent
]

@NgModule({
    declarations: [COMPONENTS, MenuComponent],
    imports: [
        SharedModule,
        DashboardRouting
    ]
})
export class DashboardModule { }
