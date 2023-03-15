import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Suggestions/AddForumPostSuggestions";
import ForumPostsListSuggestions from "../../../Components/Forum/ForumSections/Suggestions/ForumPostsListSuggestions";
import { useLocation, Link } from 'react-router-dom';

const Suggestions = () => {
    const location = useLocation();
    return (
        <div className="Suggestions">
            <NavBar />
            <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Home/
                </Link>
                <Link to="/forumhomepage"
                    className={location.pathname.startsWith("/forumhomepage") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Forum/
                </Link>
                <Link to="/forum/suggestions"
                    className={location.pathname.startsWith("/forum/suggestions") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Suggestions
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListSuggestions />
        </div>
    );
};

export default Suggestions;