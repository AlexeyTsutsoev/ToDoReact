import React from "react";

export default function Bottom({ onControl, onSave, onClear }) {
  return (
    <div>
      <span>
        <input
          id="complete"
          type="checkbox"
          onChange={(event) => onControl(event)}
        />
        Заверешнные
      </span>
      <span>
        <input
          id="active"
          type="checkbox"
          onChange={(event) => onControl(event)}
        />
        Не заверешнные
      </span>
      <button onClick={() => onSave()}>Сохранить дела</button>
      <button onClick={() => onClear()}>Очистить хранилище</button>
    </div>
  );
}
