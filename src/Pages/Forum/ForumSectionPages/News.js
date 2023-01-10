import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/News/AddForumPostNews";
import ForumPostsListNews from "../../../Components/Forum/News/ForumPostListNews";

const News = () => {
    return (
        <div className="News">
            <NavBar />
            <AddForumPost />
            <ForumPostsListNews />
        </div>
    );
};

export default News;