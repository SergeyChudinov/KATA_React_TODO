import React, { Component } from 'react';
import "./todo-list-item.css";

class TodoListItem extends Component {
  state = {
    label: this.props.description,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemChange(this.state.label);
  };

  render() {
    const { description, created, onToggleProp, onDeleted, completed } =
      this.props;

    return (
      <>
        <div className="view">
          <input className="toggle" type="checkbox" checked={completed} />
          <label>
            <span
              className="description"
              onClick={() => onToggleProp("completed")}
            >
              {description}
            </span>
            <span className="created">{created}</span>
          </label>
          <button
            className="icon icon-edit"
            onClick={() => onToggleProp("editing")}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            className="edit"
            onChange={this.onLabelChange}
            value={this.state.label}
          />
        </form>
      </>
    );
  }
}

export default TodoListItem;
