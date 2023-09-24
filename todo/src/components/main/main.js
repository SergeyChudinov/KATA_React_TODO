import TodoList from '../todo-list';
import Footer from '../footer';
import "./main.css";

function Main({ todos, onToggleProp, onDeleted }) {
  return (
    <section className="main">
      <TodoList
        todos={todos}
        onToggleProp={onToggleProp}
        onDeleted={onDeleted}
      />
      <Footer />
    </section>
  );

}

export default Main;
