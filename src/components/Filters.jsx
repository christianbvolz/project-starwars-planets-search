import React, { useContext } from 'react';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

export default function Filters() {
  const { setFilters, filters } = useContext(SearchPlanetsContext);

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
    </div>
  );
}
