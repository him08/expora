import React, { useState } from 'react';
import Header from '../sections/Header';
import { places, Place } from '../data/places'; // 👈 import your data

const Search = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState<Place | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmedQuery = query.trim().toLowerCase();

    if (trimmedQuery) {
      const match = places.find(
        (place) => place.name.toLowerCase() === trimmedQuery
      );

      if (match) {
        setResult(match);
        setNotFound(false);
      } else {
        setResult(null);
        setNotFound(true);
      }
    }
  };

  return (
    <main className="overflow-hidden">
      <Header />

      <div className="flex flex-col items-center mt-40">
        <form
          onSubmit={handleSearch}
          className="flex items-center border border-gray-300 rounded-full shadow-lg bg-white overflow-hidden transition-all duration-300 hover:shadow-xl"
        >
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for places..."
            className="p-4 w-[500px] outline-none rounded-l-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 transition duration-300"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-4 rounded-r-full hover:bg-blue-600 transition duration-300"
          >
            🔍
          </button>
        </form>

        {/* Show result */}
        {result && (
    <div className="mt-10 text-center">
    <h2 className="text-2xl font-semibold mb-4">{result.name}</h2>
    <img
      src={result.image}
      alt={result.name}
      className="max-w-lg rounded-xl shadow-lg mx-auto"
    />

    {/* 👇 Show virtual tour link only for Taj Mahal or Eiffel Tower */}
{(result.name.toLowerCase() === 'taj mahal' || result.name.toLowerCase() === 'eiffel tower') && (
  <a
    href={`/${result.name.toLowerCase().replace(/\s+/g, '-')}-tour`}
    className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
  >
    View 360° Virtual Tour
  </a>
)}

  </div>
)}
        {/* Show error */}
        {notFound && (
          <p className="mt-10 text-red-500 font-medium">
            Sorry, no results found for "{query}".
          </p>
        )}
      </div>
    </main>
  );
};

export default Search;
