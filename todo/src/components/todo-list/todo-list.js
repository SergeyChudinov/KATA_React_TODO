import TodoListItem from '../todo-list-item';
import "./todo-list.css";

function TodoList({ todos, onToggleProp, onDeleted, onItemChange }) {
	const elements = todos.map(({ id, ...props }) => {
		let classNames = "";
		if (props.editing) {
      classNames += " editing";
    } 
		if (props.completed) {
      classNames += " completed";
    }
		return (
      <li key={id} className={classNames}>
        <TodoListItem
          {...props}
          onToggleProp={(prop) => onToggleProp(id, prop)}
          onDeleted={() => onDeleted(id)}
          onItemChange={(text) => onItemChange(id, text)}
        />
      </li>
    );
	});
	
	return (
		<ul className="todo-list">
			{elements}
		</ul>
	)
}

export default TodoList;
