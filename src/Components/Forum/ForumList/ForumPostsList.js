import React from "react";
import PostsList from "../ForumPostListPage/forumPostListPage"

function ForumPostsList({ posts }) {
    return (
        <div className="ForumPostsList">
            <PostsList posts={posts} />
        </div>
    );
}
export default ForumPostsList;