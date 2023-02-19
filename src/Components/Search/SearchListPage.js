import React from "react";
import UserCard from "./UserCard"
import { Grid } from "@nextui-org/react";

const User= ({ users }) => {
  let userCards = users?.map((u) => (
    <Grid key={u.uid} xs={8} sm={4} md={2} lg={2} xl={2}>
      <UserCard key={u.uid} user={u} />
    </Grid>
  ));
  return userCards;
};

export default User;