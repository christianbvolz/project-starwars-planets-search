import React, { useContext } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';
import { columnFilterOptions, comparisonFilteroptions } from '../data';

export default function Filters() {
  const { setFilters, filters, setApplyFilters } = useContext(SearchPlanetsContext);

  return (
    <div>
      <input
        onChange={ ({ target: { value } }) => {
          setFilters({
            ...filters,
            filterByName: {
              name: value,
            },
          });
        } }
        data-testid="name-filter"
        placeholder="filtrar por nome"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target: { value } }) => {
          setFilters({
            ...filters,
            filterByNumericValues: [{
              ...filters.filterByNumericValues[0],
              column: value,
            }],
          });
        } }
      >
        {columnFilterOptions.map((option) => (
          <option value={ option } key={ option }>{ option }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target: { value } }) => {
          setFilters({
            ...filters,
            filterByNumericValues: [{
              ...filters.filterByNumericValues[0],
              comparison: value,
            }],
          });
        } }
      >
        {comparisonFilteroptions.map((option) => (
          <option value={ option } key={ option }>{ option }</option>
        ))}
      </select>
      <input
        onChange={ ({ target }) => {
          setFilters({
            ...filters,
            filterByNumericValues: [{
              ...filters.filterByNumericValues[0],
              value: target.value,
            }],
          });
        } }
        data-testid="value-filter"
        type="number"
        value={ filters.filterByNumericValues[0].value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => setApplyFilters(true) }
      >
        Filtrar
      </button>
    </div>
  );
}
