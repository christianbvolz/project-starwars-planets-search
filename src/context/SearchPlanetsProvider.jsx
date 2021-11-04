import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchPlanetsContext from './SearchPlanetsContext';
import getPlanets from '../services/starWarsPlanetsApi';

export default function SearchPlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [applyFilters, setApplyFilters] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: 'population',
      comparison: 'maior que',
      value: '100000',
    }],
  });

  useEffect(() => {
    async function fetchMyAPI() {
      const results = await getPlanets();
      setData(results);
    }

    fetchMyAPI();
  }, []);

  const context = { data, setData, filters, setFilters, applyFilters, setApplyFilters };
  return (
    <SearchPlanetsContext.Provider value={ context }>
      { children }
    </SearchPlanetsContext.Provider>
  );
}

SearchPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
