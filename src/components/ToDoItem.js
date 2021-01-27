import React from 'react';

export default function ToDoItem(props) {

    return (
        <li>
            <span><input type="checkbox" checked={props.isComplete} onChange={() => props.onComplete(props.todo.id)} /></span>
            {props.todo.value}
            <span><button onClick={() => props.onEdit(props.todo.id)}>редактировать</button></span>
            <span><button onClick={() => props.onRemove(props.todo.id)}>удалить</button></span>
        </li>
    );
}