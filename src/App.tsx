import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import AppRoutes from './routes';

class App extends Component<any, any> {
  render() {
    return (
      <Router>
        <Switch>
          <DefaultLayout>
            <AppRoutes />
          </DefaultLayout>
        </Switch>
      </Router>
    );
  }
}

export default App;
