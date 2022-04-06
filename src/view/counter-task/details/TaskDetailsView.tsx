import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface ICounterTaskUrlParams {
  taskId: string;
}

interface ITaskDetailsProps extends RouteComponentProps<ICounterTaskUrlParams> {}

class TaskDetailsView extends Component<ITaskDetailsProps, any> {
  render() {
    const {
      match: {
        params: { taskId }
      }
    } = this.props;

    return (
      <>
        <h1>task detail view {taskId}</h1>
      </>
    );
  }
}

export default TaskDetailsView;
