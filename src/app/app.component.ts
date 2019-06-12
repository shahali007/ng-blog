import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './blog/add-blog/add-blog.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-blog';
}
