import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import UserSearch from "../../Components/Search/Users/UserSearch";
import { useLocation, Link } from "react-router-dom";
import './search.css';
const SearchPage = () => {
    const location = useLocation();
    return (
        <div className="SearchPage">
            <NavBar />
            <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Home/
                </Link>
                <Link to="/search/users"
                    className={location.pathname.startsWith("/search/users") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Search/Users
                </Link>
            </nav>
            <UserSearch />
        </div>
    );
};

export default SearchPage;