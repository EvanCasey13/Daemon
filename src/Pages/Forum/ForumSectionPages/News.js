import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/News/AddForumPostNews";
import ForumPostsListNews from "../../../Components/Forum/ForumSections/News/ForumPostListNews";

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