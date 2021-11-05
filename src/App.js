import React from 'react';
import './App.css';
import Filters from './components/Filters';
import FilteredOptions from './components/FilteredOptions';
import Table from './components/Table';
import SearchPlanetsProvider from './context/SearchPlanetsProvider';

function App() {
  return (
    <SearchPlanetsProvider>
      <Filters />
      <FilteredOptions />
      <Table />
    </SearchPlanetsProvider>
  );
}

export default App;
