import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ItemComponent = class ItemComponent {
    constructor() {
        this.items = this.requestItems();
    }
    requestItems() {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.status == 200) {
                return xhr.response;
            }
        };
        xhr.open('GET', 'https://localhost:44394/item/GetAll', false);
        xhr.send();
    }
    ngOnInit() {
    }
    ngAfterContentInit() {
    }
};
ItemComponent = tslib_1.__decorate([
    Component({
        selector: 'app-item',
        templateUrl: './item.component.html',
        styleUrls: ['./item.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [])
], ItemComponent);
export { ItemComponent };
//# sourceMappingURL=item.component.js.map