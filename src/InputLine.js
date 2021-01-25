import React from 'react';

export class InputLine extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ''
      }
    }
  
    clickHendler(event) {
      event.preventDefault();
      if (this.state.value) {
        this.props.addToDo(this.state.value);
        this.setState({ value: '' });
      }
    }
  
    render() {
      return (
        <form onSubmit={(event) => this.clickHendler(event)}>
          <input value={this.state.value} type="text" placeholder="Введите задачу" maxLength="30"
            onChange={event => this.setState({ value: event.target.value })} />
          <button type="submit">Добавить</button>
        </form>
      );
    }
  
  }