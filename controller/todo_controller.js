import { TodoModel } from "../model/todo_model.js";

export class TodoController {
  constructor(todos = []) {
    this.todos = todos;
    this.id = 1;
  }

  addTodo(title) {
    this.todos.push(new TodoModel(this.id, title));
    this.id++;
  }
}
