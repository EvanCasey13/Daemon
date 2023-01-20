import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Introductions/AddForumPostIntroductions";
import ForumPostsListIntroductions from "../../../Components/Forum/ForumSections/Introductions/ForumPostListIntroductions";

const Introductions = () => {
    return (
        <div className="Introductions">
            <NavBar />
            <AddForumPost />
            <ForumPostsListIntroductions />
        </div>
    );
};

export default Introductions;