import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Todo } from '../models/todos';

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'appilication/json'
  })
}

@Injectable({
  providedIn: 'root'
})

export class TodoService {
  todosUrl:any = 'https://jsonplaceholder.typicode.com/todos';

  constructor( private http:HttpClient ) { }

  // Get Todos
  getTodos():Observable<Todo []> {
    return this.http.get<Todo[]>(this.todosUrl);
  }

  // Toggle Completed 
  toggleCompleted( todo: Todo):Observable<any> {
    return this.http.put(url, todo, httpOptions);
  }
}
