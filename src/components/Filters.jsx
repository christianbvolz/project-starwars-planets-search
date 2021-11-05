import React, { useContext, useState } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';
import { comparisonFilteroptions } from '../data';

export default function Filters() {
  const { setFilters, filters, columnOptions, applyNumericFilters,
  } = useContext(SearchPlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setvalue] = useState('100000');
  return (
    <div>
      <input
        onChange={ ({ target }) => {
          setFilters({
            ...filters,
            filterByName: {
              name: target.value,
            },
          });
        } }
        data-testid="name-filter"
        placeholder="filtrar por nome"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => {
          setColumn(target.value);
        } }
        value={ column }
      >
        {columnOptions.map((option) => (
          <option value={ option } key={ option }>{ option }</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => {
          setComparison(target.value);
        } }
        value={ comparison }
      >
        {comparisonFilteroptions.map((option) => (
          <option value={ option } key={ option }>{ option }</option>
        ))}
      </select>
      <input
        onChange={ ({ target }) => {
          setvalue(target.value);
        } }
        data-testid="value-filter"
        type="number"
        value={ value }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => applyNumericFilters({ column, comparison, value }) }
      >
        Filtrar
      </button>
    </div>
  );
}
