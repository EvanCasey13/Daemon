import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/Guidelines/AddForumPostGuidelines";
import ForumPostsListGuidelines from "../../../Components/Forum/Guidelines/ForumPostsListGuidelines";

const Guidelines = () => {

    return (
        <div className="Guidelines">
            <NavBar />
            <AddForumPost />
            <ForumPostsListGuidelines />
        </div>
    );
};

export default Guidelines;