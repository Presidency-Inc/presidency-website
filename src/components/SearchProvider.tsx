
import React from 'react';
import CommandSearch from './CommandSearch';

const SearchProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <CommandSearch />
      {children}
    </>
  );
};

export default SearchProvider;
