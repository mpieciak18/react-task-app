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
        id: uniqid()
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
        id: uniqid()
      },
    });
  };

  deleteTask = (e) => {
    const deletedId = e.target.id;
    let newTasks = [];
    for (let i = 0; i < this.state.tasks.length; i++) {
      const task = this.state.tasks[i];
      if (task.key == deletedId) {
        continue
      } else {
        newTasks = [...newTasks, task]
      }
    };
    this.setState({
      tasks: newTasks,
      task: {
        num: this.state.task.num,
        text: this.state.task.text,
        id: this.state.task.id
      },
    });
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitTask}>
          <label htmlFor='taskInput'>Enter task</label>
          <input
            onChange={this.handleChange}
            value={task.text}
            type='text'
            id='taskInput'
          />
          <button type='submit'>Add Task</button>
        </form>
        <Overview tasks={tasks} deleteTask={() => this.deleteTask}/>
      </div>
    );
  }
}

export default App;