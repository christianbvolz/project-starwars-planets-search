const getPlanets = async () => {
  const result = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ));
  return result;
};

export default getPlanets;
