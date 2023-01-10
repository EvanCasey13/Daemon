import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/CGTSupport/AddForumPostCGT";
import ForumPostsListCGT from "../../../Components/Forum/CGTSupport/ForumPostListCGT";

const CGTSupport = () => {
    return (
        <div className="CGTSupport">
            <NavBar />
            <AddForumPost />
            <ForumPostsListCGT />
        </div>
    );
};

export default CGTSupport;