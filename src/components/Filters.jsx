import React, { useContext, useState } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';
import { comparisonFilteroptions, headers } from '../data';

export default function Filters() {
  const { setFilters, filters, columnOptions,
    applyNumericFilters, setOrder, order } = useContext(SearchPlanetsContext);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setvalue] = useState('100000');
  const [orderColumn, setOrderColumn] = useState('Name');
  const [orderSort, setOrderSort] = useState('ASC');
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
      <select
        data-testid="column-sort"
        onChange={ ({ target }) => {
          setOrderColumn(target.value);
        } }
        value={ orderColumn }
      >
        {headers.map((option) => (
          <option value={ option } key={ option }>{ option }</option>
        ))}
      </select>
      <label htmlFor="input-order">
        Ascendente
        <input
          name="input-order"
          checked={ orderSort === 'ASC' }
          value="ASC"
          type="radio"
          data-testid="column-sort-input-asc"
          onChange={ ({ target }) => {
            setOrderSort(target.value);
          } }
        />
        Descendente
        <input
          name="input-order"
          value="DESC"
          type="radio"
          data-testid="column-sort-input-desc"
          onChange={ ({ target }) => {
            setOrderSort(target.value);
          } }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder({ ...order, column: orderColumn, sort: orderSort }) }
      >
        Ordernar
      </button>
    </div>
  );
}
