import React, { useState } from "react";

export default function InputLine({ id, onSubmit, text }) {
  const initialValue = text;
  const [value, setValue] = useState(initialValue);

  const onChangeHandler = (event) => {
    setValue(event.target.value);
  };
  return (
    <form onSubmit={(event) => onSubmit(event, value, id)}>
      <input
        value={value}
        type="text"
        placeholder="Введите задачу"
        maxLength="30"
        onChange={(event) => onChangeHandler(event)}
      />
      <button type="submit">Изменить</button>
    </form>
  );
}
