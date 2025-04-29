import React from "react";

function SearchBar({ inputText, setInputText, setSearchText }) {
  function handleSearch() {
    setSearchText(inputText);
  }
  return (
    <div>
      <div className="flex items-center gap-2 p-2 w-fit mx-auto my-4">
        <input
          type="text"
          placeholder="Search a Pokémon..."
          onChange={(e) => setInputText(e.target.value)}
          className="w-64 h-10 px-4 text-sm rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
