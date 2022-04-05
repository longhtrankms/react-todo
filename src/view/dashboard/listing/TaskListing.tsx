import React, { Component } from 'react';
import { List } from 'antd';
import TaskDetails from '../details/TaskDetails';
import { Task } from 'interface/task-interfaces';

interface ITaskListingProps {
  tasks?: Task[];
}

class TaskListing extends Component<ITaskListingProps, any> {
  render() {
    const { tasks } = this.props;

    return (
      <>
        <List
          size="large"
          header={<h1>My Task list</h1>}
          dataSource={tasks}
          renderItem={(task) => <TaskDetails task={task} />}
        />
      </>
    );
  }
}

export default TaskListing;
