import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/News/AddForumPostNews";
import ForumPostsListNews from "../../../Components/Forum/ForumSections/News/ForumPostListNews";
import { useLocation, Link } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const News = () => {
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();
    return (
        <div className="News">
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
            <ForumPostsListNews />
        </div>
    );
};

export default News;