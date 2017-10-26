import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
const routes: Routes = [
  { path: 'signin.html', component: SignInComponent},
  { path: 'signup.html', component: SignUpComponent},
  { path: 'post', loadChildren: './post/post.module#PostModule' },
  
  
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }