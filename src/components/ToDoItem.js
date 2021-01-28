import React, { useState } from "react";
import InputLine from "./InputLine.js";

export default function ToDoItem({ todo, onRemove, onComplete, onUpdate }) {
  const [isEdit, setEdit] = useState(false);

  const onSubmitHandler = (event, value, id) => {
    event.preventDefault();
    onUpdate(id, value);
    setEdit(!isEdit);
  };

  const onEdit = () => {
    setEdit(!isEdit);
  };

  const renderItem = () => {
    return (
      <div className="item" style={{textDecoration : todo.isComplete ? "line-through " : "none"}}> 
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => onComplete(todo.id)}
          />
          {todo.value}
            <button onClick={() => onEdit()}>редактировать</button>
            <button onClick={() => onRemove(todo.id)}>удалить</button>
      </div>
    );
  };

  return isEdit ? (
    <InputLine
      id={todo.id}
      text={todo.value}
      onSubmit={(event, value, id) => onSubmitHandler(event, value, id)}
      onBlur={() => onEdit}
    />
  ) : (
    renderItem()
  );
}
