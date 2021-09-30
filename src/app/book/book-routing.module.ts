import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateBookComponent} from "./create-book/create-book.component";
import {EditBookComponent} from "./edit-book/edit-book.component";
import {DeleteBookComponent} from "./delete-book/delete-book.component";
import {BookComponent} from "./book.component";

const routes: Routes = [
  {
    path: 'create', component: CreateBookComponent,
  },
  {
    path: 'edit/:id', component: EditBookComponent,
  },
  {
    path: 'delete/:id', component: DeleteBookComponent,
  },{
    path: '', component: BookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
