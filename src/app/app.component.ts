
import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {delay, subscribeOn} from 'rxjs/operators';
import {Todo, TodoService} from './todo.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  todos: Todo[] = [];
  todoTitle = '';
  loading = false;

  constructor(private todoService: TodoService){

  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
     this.fetchTodos();
  }

  // tslint:disable-next-line:typedef
  addTodo() {
     if (!this.todoTitle.trim()){
       return;
     }

     this.todoService.addTodo({
       title: this.todoTitle,
       completed: false
     }).subscribe(todo => {
       this.todos.push(todo);
       this.todoTitle = '';
     });

  }

  // tslint:disable-next-line:typedef
  fetchTodos() {
    this.loading = true;

      this.todoService.fetchTodos()
      // tslint:disable-next-line:align
      .subscribe( todos => {
        this.todos = todos;
        this.loading = false;
      });
  }

  // tslint:disable-next-line:typedef
  removeTodo(id: number) {
     this.todoService.removeTodo(id)
     .subscribe(response => {
             this.todos = this.todos.filter(t => t.id !== id);
     });
  }

  // tslint:disable-next-line:typedef
  completeTodo(id: number) {
    this.todoService.completeTodo(id).subscribe(todo => {
      console.log(todo);
      this.todos.find(t => t.id === todo.id).completed = true;
    });
  }
}
