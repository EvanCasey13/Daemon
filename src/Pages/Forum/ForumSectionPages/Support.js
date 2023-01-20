import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/ForumSections/Support/AddForumPostSupport";
import ForumPostsListSupport from "../../../Components/Forum/ForumSections/Support/ForumPostListSupport";

const Support = () => {
    return (
        <div className="Support">
            <NavBar />
            <AddForumPost />
            <ForumPostsListSupport />
        </div>
    );
};

export default Support;