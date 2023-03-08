import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import UserSearch from "../../Components/Search/Users/UserSearch";
import { useLocation, useSearchParams, Link } from "react-router-dom";
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './search.css';
const SearchPage = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    return (
        <div className="SearchPage">
            <NavBar />
            <nav>
                {breadcrumbs.map(({ match, breadcrumb }) => (
                    <Link
                        key={match.url}
                        to={match.url}
                        className={match.pathname === location.pathname ? "breadcrumb-active" : "breadcrumb-not-active"}
                    >
                        {breadcrumb}/
                    </Link>
                ))}
            </nav>
            <UserSearch />
        </div>
    );
};

export default SearchPage;