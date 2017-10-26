import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppRoutingModule  } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comman/header/header.component';
import { SignInComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';



@NgModule({
  declarations: [
    AppComponent,
	HeaderComponent,
	SignInComponent,
	SignUpComponent
	
    ],
  imports: [
    BrowserModule,
	HttpModule,
	AppRoutingModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
