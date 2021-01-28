import React, { useState } from 'react';
import InputLine from './InputLine.js'

export default function ToDoItem(props) {

    const [isEdit, setEdit] = useState(false);

    const onSubmitHandler = (event, value, id) => {
        event.preventDefault();
        props.onUpdate(id, value);
        setEdit(!isEdit);
    }

    const onEdit = () => {
        setEdit(!isEdit);
    }

    const renderLi = () => {
        return (
            <div>
                <span><input type="checkbox" checked={props.isComplete} onChange={() => props.onComplete(props.todo.id)} /></span>
                {props.todo.value}
                <span><button onClick={() => onEdit()}>редактировать</button></span>
                <span><button onClick={() => props.onRemove(props.todo.id)}>удалить</button></span>
            </div>
        );
    };

    return isEdit ? <InputLine
        id={props.todo.id}
        value={props.todo.value}
        onSubmit={(event, value, id) => onSubmitHandler(event, value, id)}
        onChange={props.onChange}
        onBlur={() => onEdit} />
        : renderLi();
}