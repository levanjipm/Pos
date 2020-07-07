import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: 'item', component: ItemComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }

