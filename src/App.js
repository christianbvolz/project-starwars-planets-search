import React from 'react';
import './App.css';
import Table from './components/Table';
import SearchPlanetsProvider from './context/SearchPlanetsProvider';

function App() {
  return (
    <SearchPlanetsProvider>
      <Table />
    </SearchPlanetsProvider>
  );
}

export default App;
