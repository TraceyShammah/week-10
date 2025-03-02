interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  dueDate: Date;
}


class TodoList {
  private todos: TodoItem[] = [];
  private nextId: number = 1;

 
  addTodo(task: string, dueDate: Date): void {
    const newTodo: TodoItem = {
      id: this.nextId++,
      task,
      completed: false,
      dueDate,
    };
    this.todos.push(newTodo);
  }


  completeTodo(id: number): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.completed = true;
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  
  removeTodo(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

  // Returns all todo items
  listTodos(): TodoItem[] {
    return this.todos;
  }

  
  filterTodos(completed: boolean): TodoItem[] {
    return this.todos.filter((t) => t.completed === completed);
  }

 
  updateTodo(id: number, newTask: string): void {
    const todo = this.todos.find((t) => t.id === id);
    if (todo) {
      todo.task = newTask;
    } else {
      console.error(`Todo with ID ${id} not found.`);
    }
  }

 
  clearCompletedTodos(): void {
    this.todos = this.todos.filter((t) => !t.completed);
  }
}


const myTodoList = new TodoList();

myTodoList.addTodo("Buy groceries", new Date("2025-03-01"));
myTodoList.addTodo("Finish project", new Date("2025-03-05"));

console.log("All Todos:", myTodoList.listTodos());

myTodoList.completeTodo(1);
console.log("Completed Todos:", myTodoList.filterTodos(true));

myTodoList.updateTodo(2, "Complete the JavaScript project");
console.log("Updated Todos:", myTodoList.listTodos());

myTodoList.clearCompletedTodos();
console.log("After clearing completed:", myTodoList.listTodos());
