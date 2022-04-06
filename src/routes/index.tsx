import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import CounterTaskView from 'view/counter-task/CounterTaskView';
import TaskDetailsView from 'view/counter-task/details/TaskDetailsView';
import AboutView from '../view/about/AboutView';
import DashboardView from '../view/dashboard/DashboardView';

class AppRoutes extends Component {
  render() {
    return (
      <>
        <Route path={'/'} exact component={DashboardView} />
        <Route path={'/dashboard'} component={DashboardView} />
        <Route path={'/about'} component={AboutView} />
        <Route exact path={'/counter-task'} component={CounterTaskView} />
        <Route path={'/counter-task/details/:taskId'} component={TaskDetailsView} />
      </>
    );
  }
}

export default AppRoutes
