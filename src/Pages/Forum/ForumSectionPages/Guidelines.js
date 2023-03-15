import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Guidelines/AddForumPostGuidelines";
import ForumPostsListGuidelines from "../../../Components/Forum/ForumSections/Guidelines/ForumPostsListGuidelines";
import { useLocation, Link } from 'react-router-dom';

const Guidelines = () => {
    const location = useLocation();
    return (
        <div className="Guidelines">
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
                <Link to="/forum/guidelines"
                    className={location.pathname.startsWith("/forum/guidelines") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Guidelines
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListGuidelines />
        </div>
    );
};

export default Guidelines;