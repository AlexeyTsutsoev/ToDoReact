import React, {useState} from 'react';

export default function InputLine(props) {

    const initialValue = props.todo.value;
        const [value, setValue] = useState(initialValue);

        const onChangeHandler = (event) => {
            setValue(event.target.value)
        }

        const onSubmitHandler = (event) => {
            event.preventDefault();
            console.log('from inputLine')
            props.onUpdate(props.todo.id, value);
        }

        return (
            <form onSubmit={(event) => onSubmitHandler(event)}>
                <input value={value} type="text" placeholder="Введите задачу" maxLength="30"
                    onChange={event => onChangeHandler(event)} />
                <button type="submit">Добавить</button>
            </form>
        )
}