import React, { useState } from 'react';

export const SearchSort = ({ placeholder }) => {
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('None');

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        value={searchText}
        onChange={handleSearchChange}
        placeholder={placeholder}
        className="px-4 py-2 border rounded-lg"
      />
      <select
        value={sortOption}
        onChange={handleSortChange}
        className="px-4 py-2 border rounded-lg"
      >
        <option value="None">Sort by: None</option>
        <option value="Price">Sort by: Price</option>
        <option value="Rating">Sort by: Rating</option>
      </select>
    </div>
  );
};
