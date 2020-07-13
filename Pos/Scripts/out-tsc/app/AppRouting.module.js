import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';
const appRoutes = [
    { path: 'item', component: ItemComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=AppRouting.module.js.map