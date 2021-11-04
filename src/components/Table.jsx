import React, { useContext } from 'react';
import { headers } from '../data';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

export default function Table() {
  const { data: { results = [] },
    filters,
    applyFilters,
  } = useContext(SearchPlanetsContext);
  let planets = (filters.filterByName.name)
    ? results.filter(({ name }) => name.includes(filters.filterByName.name)) : results;
  if (applyFilters) {
    const { column, comparison, value } = filters.filterByNumericValues[0];
    planets = planets.filter((planet) => {
      if (comparison === 'maior que') return Number(planet[column]) > Number(value);
      if (comparison === 'menor que') return Number(planet[column]) < Number(value);
      return Number(planet[column]) === Number(value);
    });
  }
  return (
    <table>
      <thead>
        <tr>
          { headers.map((header) => <th key={ header }>{ header }</th>)}
        </tr>
      </thead>
      <tbody>
        { planets.map(({
          name,
          rotation_period: retationPeriod,
          orbital_period: orbitalPeriod,
          diameter,
          climate,
          gravity,
          terrain,
          surface_water: surfaceWater,
          population,
          films,
          created,
          edited,
          url,
        }) => (
          <tr key={ name }>
            <td>{ name }</td>
            <td>{ retationPeriod }</td>
            <td>{ orbitalPeriod }</td>
            <td>{ diameter }</td>
            <td>{ climate }</td>
            <td>{ gravity }</td>
            <td>{ terrain }</td>
            <td>{ surfaceWater }</td>
            <td>{ population }</td>
            <td>{ films }</td>
            <td>{ created }</td>
            <td>{ edited }</td>
            <td>{ url }</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
