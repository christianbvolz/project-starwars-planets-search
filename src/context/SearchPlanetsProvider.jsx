import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchPlanetsContext from './SearchPlanetsContext';
import getPlanets from '../services/starWarsPlanetsApi';

export default function SearchPlanetsProvider({ children }) {
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const results = await getPlanets();
      setData(results);
    }

    fetchMyAPI();
  }, []);

  return (
    <SearchPlanetsContext.Provider value={ { data, setData } }>
      { children }
    </SearchPlanetsContext.Provider>
  );
}

SearchPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
