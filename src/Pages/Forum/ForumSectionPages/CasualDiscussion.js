import React from "react";
import NavBar from "../../../Components/Navbar/Navbar";
import AddForumPost from "../../../Components/Forum/ForumSections/CasualDiscussion/AddForumPostDiscussion";
import ForumPostsListDiscussion from "../../../Components/Forum/ForumSections/CasualDiscussion/ForumPostListDiscussion";

const CasualDiscussion = () => {
    return (
        <div className="CasualDiscussion">
            <NavBar />
            <AddForumPost />
            <ForumPostsListDiscussion />
        </div>
    );
};

export default CasualDiscussion;