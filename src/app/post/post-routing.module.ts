import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
    { path: '', component: ListComponent },
	{ path: 'add', component: EditComponent },
	{ path: 'edit/:id', component: EditComponent },
	{ path: 'view/:id', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PostRoutingModule { }
