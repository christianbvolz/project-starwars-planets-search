import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SearchPlanetsProvider from './context/SearchPlanetsProvider';

ReactDOM.render(
  <SearchPlanetsProvider>
    <App />
  </SearchPlanetsProvider>,
  document.getElementById('root'),
);
