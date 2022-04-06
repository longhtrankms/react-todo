import React, { Component } from 'react';
import DefaultLayout from './layouts/DefaultLayout';
import AppRoutes from './routes';

class App extends Component<any, any> {
  render() {
    return (
      <DefaultLayout>
        <AppRoutes />
      </DefaultLayout>
    );
  }
}

export default App;
