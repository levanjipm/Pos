import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
    itemsArray;

    constructor(private http: HttpClient) { }

    getItems() {
        this.http.get(window.location.origin + "/Item/GetAll").subscribe(items => {
            this.itemsArray = items;
            console.log(items);
        })
    }
    ngOnInit(): void {
        this.getItems();
    }
}
