import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class TodoService {

  constructor() { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'todo one',
        completed: true
      },
      {
        id: 2,
        title: 'todo two',
        completed: true
      },
      {
        id: 3,
        title: 'todo three',
        completed: false
      }
    ]
  }
}
