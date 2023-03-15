import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Introductions/AddForumPostIntroductions";
import ForumPostsListIntroductions from "../../../Components/Forum/ForumSections/Introductions/ForumPostListIntroductions";
import { useLocation, Link } from 'react-router-dom';

const Introductions = () => {
    const location = useLocation();
    return (
        <div className="Introductions">
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
                <Link to="/forum/introductions"
                    className={location.pathname.startsWith("/forum/introductions") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Introductions
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListIntroductions />
        </div>
    );
};

export default Introductions;