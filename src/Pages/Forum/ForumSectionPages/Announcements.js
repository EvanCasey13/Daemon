import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/UpdatesAndAnnouncements/AddForumPostUA";
import ForumPostsListUA from "../../../Components/Forum/UpdatesAndAnnouncements/ForumPostsListUA";

const Announcements = () => {

    return (
        <div className="Announcement">
            <NavBar />
            <AddForumPost />
            <ForumPostsListUA />
        </div>
    );
};

export default Announcements;