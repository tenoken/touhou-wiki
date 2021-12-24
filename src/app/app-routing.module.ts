import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { SideNavComponent } from './sidenav/sidenav.component';

//const routes: Routes = [];
const routes = [
  {path: '', component: HomeComponent},
  {path: 'post', component: PostComponent},
  {path: 'posts', component: PostComponent},
  {path: 'article', component: ArticleComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
