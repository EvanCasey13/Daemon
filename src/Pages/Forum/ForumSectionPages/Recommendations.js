import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Recommendations/AddForumPostRecommendations";
import ForumPostsListRecommendations from "../../../Components/Forum/ForumSections/Recommendations/ForumPostListRecommendations";
import { useLocation, Link } from 'react-router-dom';

const Recommendations = () => {
    const location = useLocation();
    return (
        <div className="Recommendations">
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
                <Link to="/forum/recommendations"
                    className={location.pathname.startsWith("/forum/recommendations") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Recommendations
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListRecommendations />
        </div>
    );
};

export default Recommendations;