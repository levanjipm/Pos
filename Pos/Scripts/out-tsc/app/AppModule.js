import { __decorate } from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './AppRouting.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemCategoryComponent } from './item-category/item-category.component';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ItemComponent,
            ItemCategoryComponent
        ],
        imports: [
            BrowserModule,
            AppRoutingModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=AppModule.js.map