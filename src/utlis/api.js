export const fetchAPI = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150");
  const data = await response.json();
  const list = data.results;

  const detailedPokemon = await Promise.all(
    list.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    })
  );

  return detailedPokemon;
};
