import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/UpdatesAndAnnouncements/AddForumPostUA";
import ForumPostsListUA from "../../../Components/Forum/ForumSections/UpdatesAndAnnouncements/ForumPostsListUA";

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