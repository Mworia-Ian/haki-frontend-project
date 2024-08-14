import React from 'react';

function LawyerSearch({ setSearchTerm, onSearch }) {
  return (
    <div className="flex justify-end drop-shadow-xl pt-10">
      <form className="w-full max-w-lg relative mb-7 mt-1 mr-5">
        <input
          type="search"
          id="search-dropdown"
          className="block p-2.5 pr-12 w-full z-20 text-sm text-gray-900 bg-[#F2F5F5] rounded-lg border-b border-[#37B9F1]"
          placeholder="Search by name/specialization..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </div>
  );
}

export default LawyerSearch;
