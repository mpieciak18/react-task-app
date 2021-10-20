import React from "react";
import uniqid from 'uniqid';
import Overview from './components/Overview'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      task: {
        num: 1, 
        text: '',
        id: uniqid(),
        beingEdited: false
      },
      tasks: []
    };
  }

  handleChange = (e) => {
    this.setState({
      task: {
        num: this.state.task.num,
        text: e.target.value,
        id: this.state.task.id
      }
    })
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    const oldNum = this.state.task.num;

    this.setState({
      tasks: [...this.state.tasks, this.state.task],
      task: {
        num: oldNum + 1,
        text: '',
        id: uniqid(),
        beingEdited: false
      }
    });
  };

  startEdit = (e) => {
    const editedTaskNum = e.target.parentNode.id
    const index = editedTaskNum - 1
    const task = this.state.tasks[index]

    task.beingEdited = true

    const oldTasks = this.state.tasks
    const newTasks = [...oldTasks.slice(0, index), task, ...oldTasks.slice(index + 1)]

    this.setState({
      tasks: newTasks
    });
  };

  handleEdit = (e) => {
    const editedTaskNum = Number(e.target.parentNode.id)
    const index = editedTaskNum - 1
    const task = this.state.tasks[index]

    task.text = e.target.value

    const oldTasks = this.state.tasks
    const newTasks = [...oldTasks.slice(0, index), task, ...oldTasks.slice(index + 1)]

    this.setState({
      tasks: newTasks
    });
  }

  onSubmitEdit = (e) => {
    e.preventDefault();
    const editedTaskNum = Number(e.target.id)
    const index = editedTaskNum - 1
    const task = this.state.tasks[index]

    task.beingEdited = false

    const oldTasks = this.state.tasks
    const newTasks = [...oldTasks.slice(0, index), task, ...oldTasks.slice(index + 1)]

    this.setState({
      tasks: newTasks
    });
  };

  deleteTask = (e) => {
    const deletedId = e.target.parentNode.parentNode.id;
    let newTasks = [];

    // create new array of tasks (minus deleted task)
    // and update each task's "num" property
    for (let i = 0; i < this.state.tasks.length; i++) {
      const task = this.state.tasks[i];

      if (newTasks.length == 0) {
        task.num = 1
      } else {
        task.num = newTasks[newTasks.length - 1].num + 1
      };

      if (task.id == deletedId) {
        continue
      } else {
        newTasks = newTasks.concat(task);
      }
    };

    // update state
    if (newTasks.length == 0) {
      this.setState({
        tasks: [],
        task: {
          num: 1,
          text: this.state.task.text,
          id: this.state.task.id
        }
      });
    } else {
      this.setState({
        tasks: newTasks,
        task: {
          num: newTasks[newTasks.length - 1].num + 1,
          text: this.state.task.text,
          id: this.state.task.id
        }
      });
    };
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input
            onChange={this.handleChange}
            value={this.state.task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview 
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
          startEdit={this.startEdit}
          handleEdit={this.handleEdit}
          onSubmitEdit={this.onSubmitEdit}
        />
      </div>
    );
  }
}

export default App;