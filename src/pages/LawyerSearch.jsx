import React from 'react';

function LawyerSearch({ setSearchTerm, onSearch }) {
  return (
    <div className="flex justify-end">
      <form className="w-full max-w-lg relative mt-5">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 pr-12 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
          placeholder="Search by name or specialization..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="button"
          onClick={onSearch}
          className="absolute right-1 top-1 bottom-1 px-4 py-1.5 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default LawyerSearch;
