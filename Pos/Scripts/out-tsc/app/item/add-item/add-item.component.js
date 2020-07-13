import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
let AddItemComponent = class AddItemComponent {
    constructor(http) { }
    ngOnInit() {
        this.RegisterItemForm = new FormGroup({
            'name': new FormControl(null, Validators.required),
            'reference': new FormControl(null, Validators.required)
        });
    }
    onSubmit() {
        //this.http.post(window.location.origin + "/Item/Create").subscribe(responseData => )
    }
};
AddItemComponent = __decorate([
    Component({
        selector: 'app-add-item',
        templateUrl: './add-item.component.html',
        styleUrls: ['./add-item.component.css']
    }),
    __metadata("design:paramtypes", [HttpClient])
], AddItemComponent);
export { AddItemComponent };
//# sourceMappingURL=add-item.component.js.map