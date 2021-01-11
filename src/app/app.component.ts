import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Init';

  // tslint:disable-next-line:typedef
  onInput(event: any){
    this.title = event.target.value;
  }
}
