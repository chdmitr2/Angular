import { Component } from '@angular/core';
export interface  Post {
  title: string;
  text: string;
  id?: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
   posts: Post[] = [
     {title: 'I want to learn angular', text: 'I learn angular', id: 1},
     {title: 'Next blog', text: 'About directives and pipes', id: 2}
   ];

  // tslint:disable-next-line:typedef
   updatePosts(post: Post){
    // this.posts.unshift(post);
   }

}
