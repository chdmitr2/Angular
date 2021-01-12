import { Component, OnInit} from '@angular/core';

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
export class AppComponent implements OnInit{
   posts: Post[] = [
     {title: 'I want to learn angular', text: 'I learn angular', id: 1},
     {title: 'Next blog', text: 'About directives and pipes', id: 2}
   ];

   ngOnInit(): void{
     setTimeout(() => {
       console.log('Timeout');
       this.posts[0].title = 'Changed';
     }, 5000);
   }

  // tslint:disable-next-line:typedef
   updatePosts(post: Post){
    this.posts.unshift(post);
   }

  // tslint:disable-next-line:typedef
   removePost(id: number ){
     console.log('id to Remove', id);
     this.posts = this.posts.filter(p => p.id !== id);
   }


}
