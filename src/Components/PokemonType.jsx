import React from "react";

const types = [
  "normal",
  "water",
  "grass",
  "poison",
  "ice",
  "fire",
  "ground",
  "flying",
  "bug",
  "fairy",
  "psychic",
  "electric",
  "rock",
  "dragon",
  "fighting",
  "steel",
  "ghost",
];

function PokemonType({ pokemonType, setPokemonType }) {
  return (
    <div className="bg-white rounded-md">
      <select
        value={pokemonType || " "}
        onChange={(e) => setPokemonType(e.target.value)}
        className="h-10 px-3 border border-gray-300 rounded-md"
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default PokemonType;
