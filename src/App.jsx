import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";
import "./styles/App.css";
import TokenAddress from "./pages/TokenAddress";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import SearchContextProvider from "./contexts/SearchContext";
import PairAddress from "./pages/PairAddress";

function App() {
    const [sideBarExpanded, setSideBarExpanded] = useState(false);

    return (
        <SearchContextProvider>
            <Router>
                <SideBar
                    expanded={sideBarExpanded}
                    setExpanded={setSideBarExpanded}
                />
                <NavBar setSideBarExpanded={setSideBarExpanded} />
                <main>
                    <Routes>
                        <Route path="/" element={<TokenAddress />} />
                        <Route path="/search/pair" element={<PairAddress />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </SearchContextProvider>
    );
}

export default App;
