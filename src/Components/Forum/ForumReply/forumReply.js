import React from "react";
import ForumCard from "../ForumCard/ForumReplyCard"
import { Grid } from "@nextui-org/react";

const ForumReply = ({ replies }) => {

  let replyCards = replies?.map((r) => (
    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
      <ForumCard key={r.replyID} reply={r} />
    </Grid>
  ));
  return replyCards;
};

export default ForumReply;