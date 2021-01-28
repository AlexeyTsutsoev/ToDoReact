import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import ToDoForm from "./ToDoForm";
import Bottom from "./Footer";

export default function ToDoList() {
  const [todos, setTodos] = useState(
    localStorage.getItem("ToDo") ? JSON.parse(localStorage.getItem("ToDo")) : []
  );
  const [filter, setFilter] = useState("all");

  const filterControl = (event) => {
    switch (event.target.id) {
      case "active":
        event.target.checked ? setFilter("active") : setFilter("all");
        break;
      case "complete":
        event.target.checked ? setFilter("completed") : setFilter("all");
        break;
      default:
        setFilter("all");
        throw new Error("Неверное значение");
    }
  };

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const isCompleted = (id) => {
    let tmpArr = todos;
    tmpArr.forEach((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
    });
    setTodos(tmpArr);
  };

  const updateTodo = (id, value) => {
    let tmpArr = todos;
    tmpArr.forEach((todo) => {
      if (todo.id === id) {
        todo.value = value;
      }
    });
    setTodos(tmpArr);
  };

  const filterTodo = () => {
    switch (filter) {
      case "all":
        return todos;
      case "completed":
        return todos.filter((todo) => todo.isComplete);
      case "active":
        return todos.filter((todo) => !todo.isComplete);
      default:
        throw new Error("Ошибка в фильтре");
    }
  };

  const saveTodo = () => {
    localStorage.setItem("ToDo", JSON.stringify(todos));
  };

  const clear = () => {
    setTodos([]);
    localStorage.removeItem("ToDo");
  };

  return (
    <div className="ToDoList">
      <ToDoForm addTodo={(todo) => addTodo(todo)} />
      {!todos.length ? (
        <h2>Список дел пуст</h2>
      ) : (
        filterTodo().map((todo) => {
          return (
            <ToDoItem
              todo={todo}
              key={todo.id}
              onRemove={(id) => removeTodo(id)}
              onComplete={(id) => isCompleted(id)}
              addTodo={(todo) => addTodo(todo)}
              onUpdate={updateTodo}
            />
          );
        })
      )}
      <Bottom
        onClear={() => clear()}
        onSave={() => saveTodo()}
        onControl={(event) => filterControl(event)}
      />
    </div>
  );
}
