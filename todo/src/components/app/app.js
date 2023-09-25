import { Component } from 'react';
import Header from '../header/header';
import Main from '../main/main';
import './app.css';

class App extends Component {
  maxId = 100;

  state = {
    todoData: [
      {
        class: "completed",
        description: "Completed task",
        created: "created 17 seconds ago",
        completed: true,
        editing: false,
        id: 1,
      },
      {
        class: "editing",
        description: "Editing task",
        created: "created 5 minutes ago",
        completed: true,
        editing: true,
        id: 2,
      },
      {
        class: "",
        description: "Active task",
        created: "reated 5 minutes ago",
        completed: false,
        editing: false,
        id: 3,
      },
    ],
    filter: "All",
  };

  onFilterSelect = (filter) => {
    this.setState({
      filter: filter,
    });
  };

  filtePost = (items, filter) => {
    switch (filter) {
      case "Active":
        return items.filter((item) => !item.completed);
      case "Completed":
        return items.filter((item) => item.completed);
      default:
        return items;
    }
  };

  onToggleProp = (id, prop) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
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

  deleteItems = () => {
    this.setState({
      todoData: [],
    });
  };

  addItem = (text) => {
    const newItem = {
      class: "",
      description: text,
      created: "reated 5 minutes ago",
      completed: false,
      editing: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  changeItem = (id, text) => {
    this.setState(({ todoData }) => ({
      todoData: todoData.map((item) => {
        if (item.id === id) {
          return { ...item, description: text, editing: !item.editing };
        }
        return item;
      }),
    }));
  }

  render() {
    let { todoData, filter } = this.state;

    const todoCount = todoData.filter((item) => {
      return item.completed === false;
    }).length;

    const visibleData = this.filtePost(todoData, filter);

    return (
      <section className="todoapp">
        <Header onItemAdded={this.addItem} />
        <Main
          todos={visibleData}
          onToggleProp={this.onToggleProp}
          onDeleted={this.deleteItem}
          onAllDeleted={this.deleteItems}
          onFilterSelect={this.onFilterSelect}
          filter={filter}
          todoCount={todoCount}
          onItemChange={this.changeItem}
        />
      </section>
    );
  }
}

export default App;
