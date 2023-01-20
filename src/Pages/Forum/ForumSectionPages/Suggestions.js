import React from "react";
import NavBar from "../../../Components/Navbar/Navbar"
import AddForumPost from "../../../Components/Forum/ForumSections/Suggestions/AddForumPostSuggestions";
import ForumPostsListSuggestions from "../../../Components/Forum/ForumSections/Suggestions/ForumPostsListSuggestions";

const Suggestions = () => {

    return (
        <div className="Suggestions">
            <NavBar />
            <AddForumPost />
            <ForumPostsListSuggestions />
        </div>
    );
};

export default Suggestions;