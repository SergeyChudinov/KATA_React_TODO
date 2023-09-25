import { Component } from "react";
import "./footer.css";

class Footer extends Component {
  buttonData = [
    { name: "All", label: "All" },
    { name: "Active", label: "Active" },
    { name: "Completed", label: "Completed" },
  ];

  render() {
    const {
      filter,
      onFilterSelect,
      onAllDeleted, 
      todoCount
    } = this.props;

    const items = this.buttonData.map(({ name }) => {
      const active = filter === name;
      const className = active ? "selected" : "";

      return (
        <li key={name}>
          <button onClick={() => onFilterSelect(name)} className={className}>
            {name}
          </button>
        </li>
      );
    });

    return (
      <footer className="footer">
        <span className="todo-count">
          {todoCount} item{todoCount > 1 ? "s" : ""} left
        </span>
        <ul className="filters">{items}</ul>
        <button onClick={onAllDeleted} className="clear-completed">
          Clear completed
        </button>
      </footer>
    );
  }
}

export default Footer;
