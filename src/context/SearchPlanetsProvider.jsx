import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchPlanetsContext from './SearchPlanetsContext';
import getPlanets from '../services/starWarsPlanetsApi';

export default function SearchPlanetsProvider({ children }) {
  const [data, setData] = useState({});
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });
  useEffect(() => {
    async function fetchMyAPI() {
      const results = await getPlanets();
      setData(results);
    }

    fetchMyAPI();
  }, []);

  return (
    <SearchPlanetsContext.Provider value={ { data, setData, filters, setFilters } }>
      { children }
    </SearchPlanetsContext.Provider>
  );
}

SearchPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
