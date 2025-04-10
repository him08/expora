import React, { useState } from 'react';
import Header from '../sections/Header';

const Search = () => {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      console.log(`Searching for: ${query}`);
      // search logic here 
    }
  };

  return (
    <main className="overflow-hidden">
   
      <Header />
      
    
      <div className="flex justify-center items-center mt-40"> {/* Increased margin-top */}
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
      </div>
    </main>
  );
};

export default Search;
