import { Task } from 'interface/task-interfaces';
import { Component } from 'react';

interface ITaskDetailsProps {
  task: Task;
}

class TaskDetails extends Component<ITaskDetailsProps, any> {
  render() {
    const { task } = this.props;

    return (
      <>
        <h3>{task.title}</h3>
        <p>{task.time}</p>
      </>
    );
  }
}

export default TaskDetails;
