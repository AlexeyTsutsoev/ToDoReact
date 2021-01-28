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

  const renderLi = () => {
    return (
      <div>
        <span>
          <input
            type="checkbox"
            checked={todo.isComplete}
            onChange={() => onComplete(todo.id)}
          />
        </span>
        {todo.value}
        <span>
          <button onClick={() => onEdit()}>редактировать</button>
        </span>
        <span>
          <button onClick={() => onRemove(todo.id)}>удалить</button>
        </span>
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
    renderLi()
  );
}
