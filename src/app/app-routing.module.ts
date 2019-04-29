import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateUserComponent} from './create-user/create-user.component'
import {HomeComponent} from './home/home.component'
import {SigninComponent} from './signin/signin.component'
import {CreateStoryComponent} from './create-story/create-story.component'
import {StoryComponent} from './story/story.component'
import {SearchResultsComponent} from './search-results/search-results.component'
import {LatestThreadsComponent} from './latest-threads/latest-threads.component'
const routes: Routes = [
  { path : "",component:LatestThreadsComponent},
  { path: 'signup', component:CreateUserComponent },
  { path: 'signin', component:SigninComponent },
  { path: 'story', component:CreateStoryComponent },
  { path: ":id", component: StoryComponent},
  { path: "search/:keyword", component: SearchResultsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
