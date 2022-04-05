import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// CSS overrides for portal.
import './theme/portal-common-styles.css';
import './theme/portal-utility-styles.css';
import './theme/portal-colors.css';

ReactDOM.render(<App />, document.getElementById('root'));
