import React, { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);

    return (
        <SearchContext.Provider value={{ searchResults, setSearchResults }}>
            {children}
        </SearchContext.Provider>
    );
};

export default SearchContextProvider;
