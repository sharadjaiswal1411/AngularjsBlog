import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PostRoutingModule } from './post-routing.module';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [
        CommonModule,
        PostRoutingModule
    ],
    declarations: [AddComponent,EditComponent,ViewComponent,ListComponent]
})

export class PostModule { }


