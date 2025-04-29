import React from "react";
import PokemonCard from "./PokemonCard";

function PokemonList({ pokemon }) {
  return (
    <div className="flex flex-wrap gap-5 justify-center p-2.5">
      {pokemon.map((poke) => (
        <PokemonCard key={poke.id} pokemon={poke} />
      ))}
    </div>
  );
}

export default PokemonList;
