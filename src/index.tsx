// CSS overrides for portal.
import './theme/ant-css-overrides.css';
import './theme/portal-common-styles.css';
import './theme/portal-utility-styles.css';
import './theme/portal-colors.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch } from 'react-router-dom';
import Gate from 'store/rematch/components/Gate';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

ReactDOM.render(
  <Gate>
    <BrowserRouter>
      <Switch>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Switch>
    </BrowserRouter>
  </Gate>,
  document.getElementById('root')
);
