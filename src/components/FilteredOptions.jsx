import React, { useContext } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

export default function FilteredOptions() {
  const { filters: { filterByNumericValues },
    removeNumericFilter } = useContext(SearchPlanetsContext);

  return (
    <div>
      { filterByNumericValues.map(({ column, comparison, value }) => (
        <div key={ column }>
          <span>{ `${column} - ${comparison} - ${value}` }</span>
          <button
            type="button"
            data-testid="filter"
            onClick={ () => removeNumericFilter(column) }
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
