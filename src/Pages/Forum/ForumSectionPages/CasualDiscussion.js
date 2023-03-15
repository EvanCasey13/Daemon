import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/ForumSections/CasualDiscussion/AddForumPostDiscussion";
import ForumPostsListDiscussion from "../../../Components/Forum/ForumSections/CasualDiscussion/ForumPostListDiscussion";
import { useLocation, Link } from 'react-router-dom';

const CasualDiscussion = () => {
    const location = useLocation();
    return (
        <div className="CasualDiscussion">
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
                <Link to="/forum/casual-discussion"
                    className={location.pathname.startsWith("/forum/casual-discussion") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Casual-Discussion
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListDiscussion />
        </div>
    );
};

export default CasualDiscussion;