import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Task } from "./Task.js";
import { InputLine } from "./InputLine.js";
import { ToDoList } from "./ToDoList.js";

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      toDoArr: localStorage.getItem('ToDo') ? JSON.parse(localStorage.getItem('ToDo')) : [],
      toRender: 'all'
    };
  }

  bottomListener(event) {
    switch (event.target.id) {
      case 'notDone':
        if (event.target.checked) {
          this.setState({ toRender: 'notDone' });
        } else this.setState({ toRender: 'all' });
        break;
      case 'done':
        if (event.target.checked) {
          this.setState({ toRender: 'done' });
        } else this.setState({ toRender: 'all' });
        break;
      default:
        this.setState({ toRender: 'all' });
        throw new Error('Неверное значение');
    }
  }

  isEdited(id) {
    let tmpArr = this.state.toDoArr.slice();
    tmpArr[id].isEdit = !tmpArr[id].isEdit;
    this.setState({ toDoArr: tmpArr });
    console.log(this.state);
  }

  isComplited(id) {
    let tmpArr = this.state.toDoArr.slice();
    tmpArr[id].isComplite = !tmpArr[id].isComplite;
    this.setState({ toDoArr: tmpArr });
    console.log(this.state);
  }

  remove(id) {
    let tmpArr = this.state.toDoArr.slice();
    tmpArr.splice(id, 1);
    this.setState({ toDoArr: tmpArr });
    localStorage.setItem('ToDo', JSON.stringify(this.state.toDoArr));
    console.log(this.state);
  }

  addToDo(value) {
    let tmpArr = this.state.toDoArr.slice();
    tmpArr.push(new Task(false, false, value));
    this.setState({ toDoArr: tmpArr });
    localStorage.setItem('ToDo', JSON.stringify(this.state.toDoArr));
    console.log(this.state);
  }

  updateToDo(id, value) {
    let tmpArr = this.state.toDoArr.slice();
    tmpArr[id].value = value;
    tmpArr[id].isEdit = !tmpArr[id].isEdit;
    this.setState({ toDoArr: tmpArr });
  }

  clear() {
    this.setState({toDoArr : []});
    localStorage.clear()
  }

  render() {
    return (
      <div>
        <h1>Ваши дела</h1>
        <InputLine addToDo={(value) => this.addToDo(value)} />
        {this.state.toDoArr.length < 1 ? <h2>Список дел пуст</h2> :
          <ToDoList todos={this.state.toDoArr}
            toRender={this.state.toRender}
            isComplited={(id) => this.isComplited(id)}
            isEdited={(id) => this.isEdited(id)}
            remove={(id => this.remove(id))}
            updateToDo={(id, value) => this.updateToDo(id, value)}
          />}
        <Bottom bottomListener={(event) => this.bottomListener(event)} />
        <button onClick= {() => this.clear()}>Очистить всё</button>
      </div>
    );
  }
}

class Bottom extends React.Component {
  render() {
    return (
      <div>
        <span><input id="done" type="checkbox" onChange={(event) => this.props.bottomListener(event)} />Заверешнные</span>
        <span><input id="notDone" type="checkbox" onChange={(event) => this.props.bottomListener(event)} />Не заверешнные</span>
      </div>
    );
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
);