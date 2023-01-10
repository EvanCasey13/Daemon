import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/Support/AddForumPostSupport";
import ForumPostsListSupport from "../../../Components/Forum/Support/ForumPostListSupport";

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