import React, { useContext, useState } from "react";
import SearchIcon from "../components/icons/SearchIcon";
import { SearchContext } from "../contexts/SearchContext";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
    const { searchResults, setSearchResults } = useContext(SearchContext);
    const [searchInput, setSearchInput] = useState("");

    const location = useLocation();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            location.pathname === "/search/pair/" ||
            location.pathname === "/search/pair"
        ) {
            fetchPairs(searchInput);
        } else {
            fetchTokens(searchInput);
        }
    };

    const fetchTokens = async (tokenAddress) => {
        const response = await fetch(
            `https://api.dexscreener.com/latest/dex/tokens/${tokenAddress}`
        );
        const data = await response.json();
        setSearchResults(data.pairs);
    };
    const fetchPairs = async (pairAddress) => {
        const response = await fetch(
            `https://api.dexscreener.com/latest/dex/pairs/ethereum/${pairAddress}`
        );
        const data = await response.json();
        setSearchResults(data.pairs);
    };

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search"
                id="search-input"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button type="submit" className="search-icon">
                {<SearchIcon />}
            </button>
        </form>
    );
};

export default SearchBar;
