import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Suggestions/AddForumPostSuggestions";
import ForumPostsListSuggestions from "../../../Components/Forum/ForumSections/Suggestions/ForumPostsListSuggestions";
import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const Suggestions = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    return (
        <div className="Suggestions">
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
            <AddForumPost />
            <ForumPostsListSuggestions />
        </div>
    );
};

export default Suggestions;