import React from 'react';
import { ToDoItem } from "./ToDoItem.js";

export class ToDoList extends React.Component {
    render() {
      if (this.props.toRender === 'all') {
        return (
          <ul>
            { this.props.todos.map((todo, id) => {
              return (
                <ToDoItem todo={todo} index={id} key={id}
                  onChange={(id) => this.props.isComplited(id)}
                  onEdit={(id) => this.props.isEdited(id)}
                  onRemove={(id) => this.props.remove(id)}
                  onUpdate={(id, value) => this.props.updateToDo(id, value)} />
              )
            })}
          </ul>
        )
      } else if (this.props.toRender === 'done') {
        return (
          <ul>
            { this.props.todos.filter((i) => i.isComplite).map((todo, id) => {
              return (
                <ToDoItem todo={todo} index={id} key={id}
                  onChange={(id) => this.props.isComplited(id)}
                  onEdit={(id) => this.props.isEdited(id)}
                  onRemove={(id) => this.props.remove(id)}
                  onUpdate={(id, value) => this.props.updateToDo(id, value)} />
              )
            })}
          </ul>
        )
      } else if (this.props.toRender === 'notDone') {
        return (
          <ul>
            { this.props.todos.filter((i) => !i.isComplite).map((todo, id) => {
              return (
                <ToDoItem todo={todo} index={id} key={id}
                  onChange={(id) => this.props.isComplited(id)}
                  onEdit={(id) => this.props.isEdited(id)}
                  onRemove={(id) => this.props.remove(id)}
                  onUpdate={(id, value) => this.props.updateToDo(id, value)} />
              )
            })}
          </ul>
        )
      }
    }
  }