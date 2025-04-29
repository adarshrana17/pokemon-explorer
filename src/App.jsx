import React, { useEffect, useState } from "react";
import { fetchAPI } from "./utlis/api";
import PokemonList from "./Components/PokemonList";
import SearchBar from "./Components/SearchBar";
import PokemonType from "./Components/PokemonType";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inputText, setInputText] = useState("");
  const [searchText, setSearchText] = useState("");
  const [pokemonType, setPokemonType] = useState("");
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchAPI()
      .then((data) => setPokemon(data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredPokemon = pokemon.filter((poki) => {
    const nameMatch = poki.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const typeMatch = pokemonType
      ? poki.types.some((t) => t.type.name === pokemonType.toLowerCase())
      : true;

    return nameMatch && typeMatch;
  });

  function handleTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className="bg-gradient-to-br from-green-100 to-teal-100
 flex flex-col items-center min-h-screen"
    >
      <header className="bg-gradient-to-r from-blue-500 to-green-500 w-full p-5 text-white text-center text-3xl font-bold shadow-md">
        Pokémon Explorer
      </header>
      <div className="flex flex-col items-center w-full justify-end gap-[25%] p-4 sm:flex-row">
        <SearchBar
          inputText={inputText}
          setInputText={setInputText}
          setSearchText={setSearchText}
        />
        <PokemonType
          pokemonType={pokemonType}
          setPokemonType={setPokemonType}
        />
      </div>
      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <PokemonList pokemon={filteredPokemon} />
      )}

      {showTopBtn && (
        <button
          onClick={handleTop}
          className="fixed right-6 bottom-6 bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          ↑ Top
        </button>
      )}
    </div>
  );
}

export default App;
