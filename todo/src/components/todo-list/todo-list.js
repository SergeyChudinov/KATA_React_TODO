import TodoListItem from '../todo-list-item';
import "./todo-list.css";

function TodoList({ todos, onToggleProp, onDeleted }) {
	
	const elements = todos.map(({ id, ...props }) => {
		return (
      <li key={id} className={props.class}>
        <TodoListItem
          {...props}
          onToggleProp={(prop) => onToggleProp(id, prop)}
          onDeleted={() => onDeleted(id)}
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
