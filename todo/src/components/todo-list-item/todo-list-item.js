import React, { Component } from 'react';
import PropTypes from "prop-types";
import { formatDistanceToNow } from "date-fns";
import "./todo-list-item.css";

class TodoListItem extends Component {
  state = {
    label: this.props.description,
  };

  static defaultProps = {
    description: "Active task",
    created: Date.now(),
    completed: false,
    onToggleProp: () => {},
    onDeleted: () => {},
    onItemChange: () => {},
  };

  static propTypes = {
    description: PropTypes.string.isRequired,
    created: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    onToggleProp: PropTypes.func,
    onDeleted: PropTypes.func,
    onItemChange: PropTypes.func,
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { onItemChange } = this.props;
    onItemChange(this.state.label);
  };

  render() {
    const { 
      description,
      created,
      onToggleProp,
      onDeleted,
      completed
    } = this.props;

  const time = formatDistanceToNow(created, { addSuffix: true });

    return (
      <>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggleProp("completed")}
          />
          <label>
            <span
              className="description"
              onClick={() => onToggleProp("completed")}
            >
              {description}
            </span>
            <span className="created">{time}</span>
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
