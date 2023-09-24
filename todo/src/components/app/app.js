import { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import './app.css';

class App extends Component {
  state = {
    todoData: [
      {
        class: "completed",
        description: "Completed task",
        created: "created 17 seconds ago",
        id: 1,
      },
      {
        class: "editing",
        description: "Editing task",
        created: "created 5 minutes ago",
        id: 2,
      },
      {
        class: "",
        description: "Active task",
        created: "reated 5 minutes ago",
        id: 3,
      },
    ],
  };

  onToggleProp = (id, prop) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: item[prop] === "" ? "completed" : "" };
        }
        return item;
      }),
    }));
  };
  
  deleteItem = (id) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.filter((item) => {
        return item.id !== id;
      }),
    }));
  };

  render() {
    let { todoData } = this.state;

    return (
      <section className="todoapp">
        <Header />
        <Main
          todos={todoData}
          onToggleProp={this.onToggleProp}
          onDeleted={this.deleteItem}
        />
      </section>
    );
  }
}

export default App;
