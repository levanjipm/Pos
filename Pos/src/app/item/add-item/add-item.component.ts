import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

    constructor(http: HttpClient) { }

    RegisterItemForm: FormGroup;

    ngOnInit(): void {
        this.RegisterItemForm = new FormGroup({
            'name': new FormControl(null, Validators.required),
            'reference': new FormControl(null, Validators.required,)
        })
    }

    onSubmit() {
        //this.http.post(window.location.origin + "/Item/Create").subscribe(responseData => )
    }

}
