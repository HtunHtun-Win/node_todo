import { TodoController } from "./controller/todo_controller.js";

const controller = new TodoController();

controller.addTodo("Test1");
controller.addTodo("Test2");

for (let todo of controller.todos) {
  console.log(`Title : ${todo.title}`);
}
