import React from "react";
import Item from "./Item.jsx";

class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      tasks: [],
    };
  }

  handleChange = (event) => {
    this.setState({inputVal: event.target.value})
  }

  handleAdd = (event) => {
    event.preventDefault();
    const { inputVal, tasks } = this.state;
    if (inputVal.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputVal,
    };

    this.setState({
      tasks: [newTask, ...tasks],
      inputVal: "",
    });
  }

  handleRemove = (id) => {
    this.setState((prevState) => {
      const newTasks = prevState.tasks.filter(task => task.id !== id);
      return { tasks: newTasks };
    });
  }

  render() {
    return (
      <div className="container p-3">
        <h1 className="mb-4 fs-2">To Do List</h1>
        <div className="mb-3">
          <form className="d-flex">
            <div className="me-3">
              <input
                type="text"
                value={this.state.inputVal}
                required=""
                className="form-control"
                placeholder="Task"
                onChange={this.handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.handleAdd}>add</button>
          </form>
        </div>
        <ul className="list-group">
          {this.state.tasks.map((task) => (
            <Item
              key={task.id}
              task={task}
              onRemove={() => this.handleRemove(task.id)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default TodoBox;
