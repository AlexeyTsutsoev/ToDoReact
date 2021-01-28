import React from "react";
import ToDoList from "./components/ToDoList";
import './index.css';

export default function App() {
  return (
    <div className="app">
      <h1>Список Ваших дел</h1>
      <ToDoList />
    </div>
  );
}
