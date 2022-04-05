import { Task } from 'interface/task-interfaces';
import React, { Component } from 'react';
import TaskListing from './listing/TaskListing';

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Eat',
    time: '8pm'
  },
  {
    id: 2,
    title: 'Sleep',
    time: '9pm'
  },
  {
    id: 3,
    title: 'Code',
    time: '10am'
  },
  {
    id: 4,
    title: 'Repeat',
    time: '11am'
  }
];

class DashboardView extends Component {
  render() {
    return (
      <>
        <TaskListing tasks={tasks} />
      </>
    );
  }
}

export default DashboardView;
