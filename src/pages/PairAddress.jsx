import React, { useContext } from "react";
import { SearchContext } from "../contexts/SearchContext";
import SearchCardRow from "../components/SearchCardRow";

const PairAddress = () => {
    
    const { searchResults } = useContext(SearchContext);

    return (
        <section className="pair-address">
            <section className="search-results-container">
                <h2>Pair Search Results</h2>
                <section className="search-results">
                {searchResults?.map((value) => (
                        <SearchCardRow key={value.dexId} pair={value} />
                    ))}
                </section>
            </section>
        </section>
    );
};

export default PairAddress;
