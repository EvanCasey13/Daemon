import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/GameAnnouncements/AddForumPostGA";
import ForumPostsListGA from "../../../Components/Forum/GameAnnouncements/ForumPostListGA";

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