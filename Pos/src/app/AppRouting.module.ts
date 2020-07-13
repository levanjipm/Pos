import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './item/add-item/add-item.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'item', component: ItemComponent },
    { path: 'item/addItem', component: AddItemComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

