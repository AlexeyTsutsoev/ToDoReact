import React from 'react';

export class ToDoItem extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: props.todo.value
      }
    }
  
    submitHendler(event) {
      event.preventDefault();
      console.log(this.state.value)
      this.props.onUpdate(this.props.index, this.state.value);
    }
  
    render() {
      if (this.props.todo.isEdit) {
        return (
          <form onSubmit={(event) => this.submitHendler(event)}>
            <input value={this.state.value} type="text" placeholder="Введите задачу" maxLength="30"
              onChange={event => this.setState({ value: event.target.value })} />
            <button type="submit">Добавить</button>
          </form>
        )
      } else {
        return (
          <li>
            <span><input type="checkbox" checked={this.props.todo.isComplite} onChange={() => this.props.onChange(this.props.index)} /></span>
            {(this.props.index + 1) + ' ' + this.props.todo.value}
            <span><button onClick={() => this.props.onEdit(this.props.index)}>редактировать</button></span>
            <span><button onClick={() => this.props.onRemove(this.props.index)}>удалить</button></span>
          </li>
        )
      }
    }
  }