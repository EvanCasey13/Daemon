import React from "react";
import RepliesList from "../ForumReplyListPage/forumReplyListPage"

function ForumRepliesList({ replies }) {
  return (
    <div className="ForumRepliesList">
      <RepliesList replies={replies}></RepliesList>
    </div>
  );
}
export default ForumRepliesList;