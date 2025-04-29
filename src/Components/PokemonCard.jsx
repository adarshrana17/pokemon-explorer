import React from "react";

function PokemonCard({ pokemon }) {
  return (
    <div className="flex flex-col w-64 bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-transform ">
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold capitalize mb-2">{pokemon.name}</h2>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
          className="w-28 h-28 object-contain mb-4 object-contain border-4 border-gray-200 rounded-full"
        />
      </div>

      <p className="text-gray-700 text-md mb-1 flex justify-between">
        <span>
          {" "}
          <span className="font-semibold">ID:</span> {pokemon.id}{" "}
        </span>

        <span>
          <span className="font-semibold">Type:</span>{" "}
          {pokemon.types.map((t) => t.type.name).join(", ")}
        </span>
      </p>
    </div>
  );
}

export default PokemonCard;
