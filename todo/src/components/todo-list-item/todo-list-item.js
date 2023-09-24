import "./todo-list-item.css";

function TodoListItem({ description, created, onToggleProp, onDeleted }) {
  return (
    <>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>
          <span
            className="description"
            onClick={() => onToggleProp("class")}
          >
            {description}
          </span>
          <span className="created">{created}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy"
          onClick={onDeleted}
        ></button>
      </div>
      <input type="text" className="edit" defaultValue="Editing task" />
    </>
  );
}

export default TodoListItem;
