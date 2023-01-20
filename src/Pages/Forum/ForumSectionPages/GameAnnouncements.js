import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/GameAnnouncements/AddForumPostGA";
import ForumPostsListGA from "../../../Components/Forum/ForumSections/GameAnnouncements/ForumPostListGA";

const GameAnnouncement = () => {

    return (
        <div className="GameAnnouncement">
            <NavBar />
            <AddForumPost />
            <ForumPostsListGA />
        </div>
    );
};

export default GameAnnouncement;