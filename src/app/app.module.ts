import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { NgwWowModule } from 'ngx-wow';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GetComponent } from './components/get/get.component';
import { TeamComponent } from './components/team/team.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { FrontEndComponent } from './components/courses/front-end/front-end.component';
import { WebDesignComponent } from './components/courses/web-design/web-design.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    CoursesComponent,
    GetComponent,
    TeamComponent,
    BlogComponent,
    ContactComponent,
    FrontEndComponent,
    WebDesignComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgwWowModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

 }
