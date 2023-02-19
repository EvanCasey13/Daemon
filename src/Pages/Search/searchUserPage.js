import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import UserSearch from "../../Components/Search/UserSearch";

const SearchPage = () => {
    return (
        <div className="SearchPage">
            <NavBar />
            <UserSearch />
        </div>
    );
};

export default SearchPage;