import React from "react";
import NavBar from "../../Components/Navbar/Navbar";
import UserProfileForumPostsList from "../../Components/User/UserForumPostsList/UserProfileForumPostsList";

const ForumUserPostList = () => {
    return (
        <div className="ForumUserPostList">
            <NavBar />
            <UserProfileForumPostsList  />
        </div>
    );
};

export default ForumUserPostList;