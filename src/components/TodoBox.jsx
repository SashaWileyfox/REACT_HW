import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../styles/style.css";
const TodoBox = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDescription, setInputDescription] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleTitleChange = (e) => {
    setInputTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setInputDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputTitle.trim() || !inputDescription.trim()) return;

    const newTask = {
      id: uuidv4(),
      title: inputTitle,
      description: inputDescription,
    };

    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setInputTitle("");
    setInputDescription("");
  };

  const handleRemove = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div>
      <h1 className="text-center mt-5 mb-5">TODO LIST</h1>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <form id="todoForm" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Task title</label>
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  value={inputTitle}
                  onChange={handleTitleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Task body</label>
                <textarea
                  name="description"
                  className="form-control"
                  placeholder="Task body"
                  cols="30"
                  rows="10"
                  value={inputDescription}
                  onChange={handleDescriptionChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="col-8">
            <div className="row" id="todoItems">
              {tasks.map((task, index) => (
                <div className="col-4" key={task.id}>
                  <div className="taskWrapper">
                    <div className="taskHeading">
                      <span>#{index + 1} </span>
                      {task.title}
                    </div>
                    <div className="taskDescription">{task.description}</div>
                    <button
                      className="btn btn-danger btn-sm mt-2"
                      onClick={() => handleRemove(task.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoBox;
