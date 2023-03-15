import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/GameAnnouncements/AddForumPostGA";
import ForumPostsListGA from "../../../Components/Forum/ForumSections/GameAnnouncements/ForumPostListGA";
import { useLocation, Link } from 'react-router-dom';

const GameAnnouncement = () => {
    const location = useLocation();
    return (
        <div className="GameAnnouncement">
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
                <Link to="/forum/gameannouncements"
                    className={location.pathname.startsWith("/forum/gameannouncements") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Game-announcements
                </Link>
            </nav>
            <AddForumPost />
            <ForumPostsListGA />
        </div>
    );
};

export default GameAnnouncement;