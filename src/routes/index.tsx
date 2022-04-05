import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import AboutView from '../view/about/AboutView';
import DashboardView from '../view/dashboard/DashboardView';

class AppRoutes extends Component {
  render() {
    return (
      <>
        <Route path={'/'} exact component={DashboardView} />
        <Route path={'/dashboard'} component={DashboardView} />
        <Route path={'/about'} component={AboutView} />
      </>
    );
  }
}

export default AppRoutes
