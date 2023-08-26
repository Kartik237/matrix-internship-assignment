import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import "../styles/SearchResults.css";
import SearchCardRow from "../components/SearchCardRow";

const TokenAddress = () => {
    const { searchResults } = useContext(SearchContext);

    return (
        <section className="token-address">
            <section className="search-results-container">
                <h2>Token Search Results</h2>
                <section className="search-results">
                    {searchResults.map((value) => (
                        <SearchCardRow key={value.dexId} pair={value} />
                    ))}
                </section>
            </section>
        </section>
    );
};

export default TokenAddress;
