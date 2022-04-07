import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CounterTaskView from 'view/counter-task/CounterTaskView';
import TaskDetailsView from 'view/counter-task/details/TaskDetailsView';
import AboutView from '../view/about/AboutView';

class AppRoutes extends Component {
  render() {
    return (
      <>
        <Route exact path={'/'} component={CounterTaskView} />
        <Route exact path={'/tasks'} component={CounterTaskView} />
        <Route path={'/tasks/details/:taskId'} component={TaskDetailsView} />

        <Route path={'/about'} component={AboutView} />
      </>
    );
  }
}

export default AppRoutes
