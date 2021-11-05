import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import SearchPlanetsContext from './SearchPlanetsContext';
import getPlanets from '../services/starWarsPlanetsApi';
import { columnFilterOptions } from '../data';

export default function SearchPlanetsProvider({ children }) {
  const [data, setData] = useState({ results: [] });
  const [columnOptions, setColumnOptions] = useState(columnFilterOptions);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });
  const [order, setOrder] = useState({
    column: 'name',
    sort: 'ASC',
  });
  const { filterByName, filterByNumericValues } = filters;

  useEffect(() => {
    async function fetchMyAPI() {
      const results = await getPlanets();
      setData(results);
    }

    fetchMyAPI();
  }, []);

  const applyNumericFilters = ({ column, comparison, value }) => {
    const newColumnOptions = columnOptions.filter((option) => option !== column);
    setColumnOptions(newColumnOptions);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues, { column, comparison, value }],
    });
  };

  const removeNumericFilter = (column) => {
    const newColumnOptions = [...columnOptions, column];
    setColumnOptions(newColumnOptions);
    const newFilterByNumericValues = filterByNumericValues
      .filter((filterObj) => filterObj.column !== column);
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...newFilterByNumericValues],
    });
  };

  let planets = (filterByName.name)
    ? data.results.filter(({ name }) => name.includes(filterByName.name)) : data.results;

  if (filterByNumericValues.length !== 0) {
    filterByNumericValues.forEach(({ column, comparison, value }) => {
      planets = planets.filter((planet) => {
        if (comparison === 'maior que') return Number(planet[column]) > Number(value);
        if (comparison === 'menor que') return Number(planet[column]) < Number(value);
        return Number(planet[column]) === Number(value);
      });
    });
  }

  planets.sort((a, b) => {
    const ONE = 1;
    if (a.name < b.name) {
      return -ONE;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  // planets.sort((a, b) => Number(a.diameter) - Number(b.diameter));

  return (
    <SearchPlanetsContext.Provider
      value={ {
        data,
        setData,
        filters,
        setFilters,
        columnOptions,
        setColumnOptions,
        planets,
        applyNumericFilters,
        removeNumericFilter,
        order,
        setOrder,
      } }
    >
      { children }
    </SearchPlanetsContext.Provider>
  );
}

SearchPlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
