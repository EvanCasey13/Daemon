import React from "react";
import ForumCard from "../ForumCard/ForumPostCard"
import { Grid } from "@nextui-org/react";

const ForumPost = ({ posts }) => {

  let postCards = posts?.map((p) => (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
      <ForumCard key={p.postID} post={p} />
    </Grid>
  ));
  return postCards;
};

export default ForumPost;