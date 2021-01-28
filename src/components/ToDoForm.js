import React, { useState } from 'react';

export default function ToDoForm(props) {

    const [value, setValue] = useState('');

    const onClickHandler = (event) => {
        event.preventDefault();
        if (value) {
            props.addTodo(
                { id: new Date().getSeconds() + new Date().getMilliseconds(), isComplete: false, value: value }
            );
            setValue('');
        }
    }

    const onChangeHandler = (event) => {
        setValue(event.target.value);
    }


    return (
        <form onSubmit={(event) => onClickHandler(event)}>
            <input value={value} type="text" placeholder="Введите задачу" maxLength="30"
                onChange={(event) => onChangeHandler(event)} />
            <button type="submit">Добавить</button>
        </form>)
}