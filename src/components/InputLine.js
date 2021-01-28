import React, { useState } from 'react';

export default function InputLine(props) {

    const initialValue = props.value;
    const [value, setValue] = useState(initialValue);

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={(event) => props.onSubmit(event, value, props.id)}>
            <input value={value} type="text" placeholder="Введите задачу" maxLength="30"
                onChange={event => onChangeHandler(event)} />
            <button type="submit">Добавить</button>
        </form>
    );
}