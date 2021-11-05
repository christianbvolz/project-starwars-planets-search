import React, { useContext } from 'react';
import { headers } from '../data';
import SearchPlanetsContext from '../context/SearchPlanetsContext';

export default function Table() {
  const { planets } = useContext(SearchPlanetsContext);

  return (
    <table>
      <thead>
        <tr>
          { headers.map((header) => <th key={ header }>{ header }</th>)}
        </tr>
      </thead>
      <tbody>
        { planets.map((planet) => {
          const planetsWithoutResidents = Object.keys(planet)
            .filter((key) => key !== 'residents');
          return (
            <tr key={ planet.name }>
              { planetsWithoutResidents.map((key) => {
                if (key !== 'name') return <td key={ planet[key] }>{ planet[key] }</td>;
                return (
                  <td data-testid="planet-name" key={ planet[key] }>{ planet[key] }</td>
                );
              }) }
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
