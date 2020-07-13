import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let ItemComponent = class ItemComponent {
    constructor(http) {
        this.http = http;
    }
    getItems() {
        this.http.get(window.location.origin + "/Item/GetAll").subscribe(items => {
            this.itemsArray = items;
            console.log(items);
        });
    }
    ngOnInit() {
        this.getItems();
    }
};
ItemComponent = __decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    }),
    __metadata("design:paramtypes", [HttpClient])
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map