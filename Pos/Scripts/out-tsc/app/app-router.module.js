import * as tslib_1 from "tslib";
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
const appRoutes = [
    { path: 'asdf', component: HomeComponent },
    { path: '', component: AppComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [
            RouterModule.forRoot(appRoutes, { useHash: true })
        ],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-router.module.js.map