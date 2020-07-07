import { Component, OnInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, AfterContentInit {
    items;
    requestItems(): any {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.status == 200) {
                return xhr.response;
            }
        }
        xhr.open('GET', 'https://localhost:44394/item/GetAll', false);
        xhr.send();
    }
    constructor() {
        this.items = this.requestItems();
    }
    ngOnInit(): void {
    }

    ngAfterContentInit() {
    }

}
