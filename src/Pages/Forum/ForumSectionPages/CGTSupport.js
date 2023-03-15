import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/ForumSections/CGTSupport/AddForumPostCGT";
import ForumPostsListCGT from "../../../Components/Forum//ForumSections/CGTSupport/ForumPostListCGT";
import { useLocation, Link } from 'react-router-dom';

const CGTSupport = () => {
    const location = useLocation();
    return (
        <div className="CGTSupport">
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
                <Link to="/forum/games-tech-computer-support"
                    className={location.pathname.startsWith("/forum/games-tech-computer-support") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    CGT-Support
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListCGT />
        </div>
    );
};

export default CGTSupport;