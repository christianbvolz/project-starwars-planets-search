import React from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import SearchPlanetsProvider from './context/SearchPlanetsProvider';

function App() {
  return (
    <SearchPlanetsProvider>
      <Filters />
      <Table />
    </SearchPlanetsProvider>
  );
}

export default App;
