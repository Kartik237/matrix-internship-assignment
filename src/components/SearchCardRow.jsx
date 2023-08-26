import React from "react";
import "../styles/SearchResults.css";
import "../styles/Card.css";
import InfoIcon from "../components/icons/InfoIcon";

const SearchCardRow = ({ pair }) => {
    console.log(pair);
    return (
        <section className="search-card-row">
            <SearchCard title={`Base Info`}>
                <div className="card-details">
                    <p>
                        <span>Pair created at</span>
                        <span>{pair?.chainId}</span>
                    </p>
                    <p>
                        <span>Symbol</span>
                        <span>{pair?.baseToken?.symbol}</span>
                    </p>
                    <p>
                        <span>Dex ID</span>
                        <span>{pair.dexId}</span>
                    </p>
                </div>
            </SearchCard>
            <SearchCard title={`Base Token`}>
                <div className="card-details">
                    <p>
                        <span>Name</span>
                        <span>
                            {pair.baseToken.name.split("").slice(0, 20)}
                        </span>
                    </p>
                    <p>
                        <span>Symbol</span>
                        <span>{pair.baseToken.symbol}</span>
                    </p>
                    <p>
                        <span>Address</span>
                        <span>
                            {pair.baseToken.address.split("").slice(0, 20)}...
                        </span>
                    </p>
                </div>
            </SearchCard>
            <SearchCard title={`Quote Token`}>
                <div className="card-details">
                    <p>
                        <span>Name</span>
                        <span>
                            {pair.quoteToken.name.split("").slice(0, 20)}
                        </span>
                    </p>
                    <p>
                        <span>Symbol</span>
                        <span>{pair.quoteToken.symbol}</span>
                    </p>
                    <p>
                        <span>Address</span>
                        <span>
                            {pair.quoteToken.address.split("").slice(0, 20)}...
                        </span>
                    </p>
                </div>
            </SearchCard>
            <SearchCard title={`Price`}>
                <div className="card-details">
                    <p>
                        <span>Price Native</span>
                        <span>{pair.priceNative}</span>
                    </p>
                    <p>
                        <span>Price</span>
                        <span>{pair.priceUsd}</span>
                    </p>
                </div>
            </SearchCard>
        </section>
    );
};

const SearchCard = ({ title, children }) => {
    return (
        <div className="search-card">
            <h3 className="card-title">{title}</h3>
            {children}
            <button className="card-info">
                <InfoIcon />
            </button>
        </div>
    );
};

export default SearchCardRow;
