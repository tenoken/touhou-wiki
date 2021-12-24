import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
// import { FormsModule}  from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service'
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { SideNavComponent } from './sidenav/sidenav.component';
import { RouterModule } from '@angular/router';
import { ToolBarComponent } from './toolbar/toolbar.component';
import { PostComponent } from './post/post.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleComponent } from './article/article.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';

// const routes = [
//     {path: '', component: HomeComponent},
//     {path: 'post', component: PostComponent}
//   ]

@NgModule({
  declarations: [
    AppComponent, 
    HomeComponent, 
    PostComponent, 
    ToolBarComponent, 
    SideNavComponent, 
    FooterComponent, 
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // RouterModule.forRoot(routes),
    MatSliderModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [ApiService, HttpClient, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },MatSidenav],
  bootstrap: [AppComponent]
})
export class AppModule { }
