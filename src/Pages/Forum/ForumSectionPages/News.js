import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/News/AddForumPostNews";
import ForumPostsListNews from "../../../Components/Forum/ForumSections/News/ForumPostListNews";
import { useLocation, Link } from 'react-router-dom';

const News = () => {
    const location = useLocation();
    return (
        <div className="News">
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
                <Link to="/forum/news"
                    className={location.pathname.startsWith("/forum/news") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    News
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListNews />
        </div>
    );
};

export default News;