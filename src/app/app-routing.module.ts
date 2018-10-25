import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes, Router } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { GetComponent } from './components/get/get.component';
import { TeamComponent } from './components/team/team.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FrontEndComponent } from './components/courses/front-end/front-end.component';
import { WebDesignComponent } from './components/courses/web-design/web-design.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'courses', component: CoursesComponent},
  { path: 'registration', component: GetComponent },
  { path: 'team', component: TeamComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'courses/front-end', component: FrontEndComponent },
  { path: 'courses/web-design', component: WebDesignComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [
      CommonModule,
      RouterModule.forRoot(appRoutes),          
  ],
  declarations: []
  })
export class AppRoutingModule { 

  public href: string = "";

  constructor( private router: Router ){};

  ngOnInit(){
    this.href = this.router.url;
    console.log(this.router.url);
  }
  
 }
