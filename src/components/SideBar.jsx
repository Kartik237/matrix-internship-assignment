import React, { useState } from "react";
import "../styles/SideBar.css";
import { Link } from "react-router-dom";
import TokenIcon from "../components/icons/TokenIcon";
import PairIcon from "../components/icons/PairIcon";

const SideBar = ({ expanded }) => {
    const tabs = [
        {
            title: "Token Address",
            id: 1,
            logo: <TokenIcon />,
            url: "/",
        },
        {
            title: "Pair Address",
            id: 2,
            logo: <PairIcon />,
            url: "/search/pair",
        },
    ];

    const [activeTab, setActiveTab] = useState(1);

    return (
        <aside className={`sidebar ${expanded ? "expanded" : ""}`}>
            <div className="sidebar-logo-container">
                <span className="logo-icon"></span>
                <span className="logo-text">NFTify</span>
            </div>
            <div className="sidebar-tab-container">
                {tabs.map((tab) => (
                    <SideBarTab
                        key={tab.id}
                        title={tab.title}
                        logo={tab.logo}
                        url={tab.url}
                        isActive={activeTab === tab.id}
                        onClick={() => {
                            setActiveTab(tab.id);
                        }}
                    />
                ))}
            </div>
        </aside>
    );
};

const SideBarTab = ({ title, logo, isActive, onClick, url }) => (
    <Link
        className={`sidebar-tab ${isActive ? "active" : ""}`}
        onClick={onClick}
        to={url}
    >
        <div className="tab-logo-container">{logo}</div>
        <span className="tab-text">{title}</span>
    </Link>
);

export default SideBar;
