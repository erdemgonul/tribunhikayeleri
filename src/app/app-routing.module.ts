import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component'
import {HomeComponent} from './home/home.component'
import {SigninComponent} from './signin/signin.component'
import {CreateStoryComponent} from './create-story/create-story.component'
const routes: Routes = [
  {path : "",component:HomeComponent},
  { path: 'signup', component:CreateUserComponent },
  { path: 'signin', component:SigninComponent },
  { path: 'createstory', component:CreateStoryComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
