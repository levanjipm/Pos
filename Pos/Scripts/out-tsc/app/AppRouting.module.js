import { __decorate } from "tslib";
import { RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { NgModule } from '@angular/core';
const appRoutes = [
    { path: 'item', component: ItemComponent },
    { path: 'item/addItem', component: AddItemComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes)
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=AppRouting.module.js.map