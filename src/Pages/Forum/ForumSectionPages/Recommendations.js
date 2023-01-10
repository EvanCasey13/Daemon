import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/Recommendations/AddForumPostRecommendations";
import ForumPostsListRecommendations from "../../../Components/Forum/Recommendations/ForumPostListRecommendations";

const Recommendations = () => {
    return (
        <div className="Recommendations">
            <NavBar />
            <AddForumPost />
            <ForumPostsListRecommendations />
        </div>
    );
};

export default Recommendations;