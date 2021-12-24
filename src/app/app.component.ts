import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
@Component({
  selector: 'app-root',
  template: '<toolbar></toolbar><router-outlet></router-outlet><app-footer></app-footer>'
})
export class AppComponent {
  title = 'TouhouWiki';
}
