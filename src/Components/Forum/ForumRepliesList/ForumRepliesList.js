import React from "react";
import RepliesList from "../../Forum/ForumReply/forumReply"
import { Grid } from "@nextui-org/react";

function ForumRepliesList({ replies }) {
  return (
    <div className="ForumRepliesList">           
              <RepliesList replies={replies}></RepliesList>       
    </div>
  );
}
export default ForumRepliesList;