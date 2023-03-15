import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/ForumSections/Support/AddForumPostSupport";
import ForumPostsListSupport from "../../../Components/Forum/ForumSections/Support/ForumPostListSupport";
import { useLocation, Link } from 'react-router-dom';

const Support = () => {
    const location = useLocation();
    return (
        <div className="Support">
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
                <Link to="/forum/support"
                    className={location.pathname.startsWith("/forum/support") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Support
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListSupport />
        </div>
    );
};

export default Support;