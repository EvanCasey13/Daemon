import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/UpdatesAndAnnouncements/AddForumPostUA";
import ForumPostsListUA from "../../../Components/Forum/ForumSections/UpdatesAndAnnouncements/ForumPostsListUA";
import { useLocation, Link } from 'react-router-dom';

const Announcements = () => {
    const location = useLocation();
    return (
        <div className="Announcement">
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
                <Link to="/forum/announcements"
                    className={location.pathname.startsWith("/forum/announcements") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Announcements
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListUA />
        </div>
    );
};

export default Announcements;