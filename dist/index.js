"use strict";

class TodoList {
    constructor() {
        this.todos = [];
        this.nextId = 1;
    }
    
    addTodo(task, dueDate) {
        const newTodo = {
            id: this.nextId++,
            task,
            completed: false,
            dueDate,
        };
        this.todos.push(newTodo);
    }
   
    completeTodo(id) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = true;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
    
    removeTodo(id) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
   
    listTodos() {
        return this.todos;
    }
    
    filterTodos(completed) {
        return this.todos.filter((t) => t.completed === completed);
    }
    
    updateTodo(id, newTask) {
        const todo = this.todos.find((t) => t.id === id);
        if (todo) {
            todo.task = newTask;
        }
        else {
            console.error(`Todo with ID ${id} not found.`);
        }
    }
   
    clearCompletedTodos() {
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
//# sourceMappingURL=index.js.map