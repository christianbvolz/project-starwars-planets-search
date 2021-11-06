const sortPlanetsByWord = (planets, { column, sort }) => {
  if (sort === 'ASC') {
    planets.sort((a, b) => {
      const ONE = 1;
      if (a[column] < b[column]) {
        return -ONE;
      }
      if (a[column] > b[column]) {
        return 1;
      }
      return 0;
    });
  } else {
    planets.sort((a, b) => {
      const ONE = 1;
      if (b[column] < a[column]) {
        return -ONE;
      }
      if (b[column] > a[column]) {
        return 1;
      }
      return 0;
    });
  }
  return planets;
};

const sortPlanetsByNumber = (planets, { column, sort }) => {
  if (sort === 'ASC') {
    planets.sort((a, b) => Number(a[column]) - Number(b[column]));
  } else {
    planets.sort((a, b) => Number(b[column]) - Number(a[column]));
  }
  return planets;
};

const sortPlanets = (planets, { column, sort }) => {
  if (Number.isNaN(Number(planets[0][column]))) {
    return sortPlanetsByWord(planets, { column, sort });
  }
  return sortPlanetsByNumber(planets, { column, sort });
};

export default sortPlanets;
