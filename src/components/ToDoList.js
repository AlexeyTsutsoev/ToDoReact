import React, { useState } from 'react';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';
import InputLine from './InputLine';
import Bottom from './Bottom';


export default function ToDoList() {
    const [todos, setTodos] = useState(localStorage.getItem('ToDo') ? JSON.parse(localStorage.getItem('ToDo')) : []);
    const [filter, setFilter] = useState('all');

    const filterControl = (event) => {
        switch (event.target.id) {
            case 'active':
                event.target.checked ? setFilter('active') : setFilter('all');
                break;
            case 'complete':
                event.target.checked ? setFilter('completed') : setFilter('all');
                break;
            default:
                setFilter('all');
                throw new Error('Неверное значение');
        }
    }

    const addTodo = (todo) => {
        setTodos([todo, ...todos]);
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const isCompleted = (id) => {
        let tmpArr = todos;
        tmpArr.forEach(todo => {
            if (todo.id === id) todo.isComplete = !todo.isComplete
        })
        setTodos(tmpArr);
    }

    const isEdited = (id) => {
        let tmpArr = todos;
        tmpArr.forEach(todo => {
            if (todo.id === id) todo.isEdit = !todo.isEdit
        })
        setTodos(tmpArr);
        console.log('state изменен');
    }

    const updateTodo = (id, value) => {
        let tmpArr = todos;
        tmpArr.forEach(todo => {
            if (todo.id === id) {
                todo.value = value;
                todo.isEdit = !todo.isEdit
            }
        });
        setTodos(tmpArr);
        console.log('state изменен');
    }

    const filterTodo = () => {
        switch (filter) {
            case 'all':
                return todos;
            case 'completed':
                return todos.filter((todo) => todo.isComplete);
            case 'active':
                return todos.filter((todo) => !todo.isComplete);
            default:
                throw new Error('Ошибка в фильтре');
        }
    }

    const saveTodo = () => {
        localStorage.setItem('ToDo', JSON.stringify(todos))
    }

    const clear = () => {
        setTodos([]);
        localStorage.clear();
    }

    return (
        <div>
            <ToDoForm addTodo={(todo) => addTodo(todo)} />
            {todos.length < 1 ?
                <h2>Список дел пуст</h2> :
                filterTodo().map((todo) => {
                    return todo.isEdit ? (<InputLine todo={todo}
                        key={todo.id}
                        onUpdate={updateTodo} />) :
                        (<ToDoItem todo={todo}
                            key={todo.id}
                            onRemove={(id) => removeTodo(id)}
                            onComplete={(id) => isCompleted(id)}
                            onEdit={isEdited}
                            addTodo={(todo) => addTodo(todo)}
                        />);
                })
            }
            <Bottom onClear={() => clear()} onSave={() => saveTodo()} onControl ={(event) => filterControl(event)} />
            <button onClick={() => console.log(todos)}>log todos</button>
        </div>
    )
}