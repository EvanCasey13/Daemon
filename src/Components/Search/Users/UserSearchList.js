import React from "react";
import UserSearchList from "./UserSearchListPage"
import { Grid } from "@nextui-org/react";

function UserList({ users }) {
    return (
        <div className="UsersList">
            <Grid.Container gap={1} >
                <UserSearchList users={users} />
            </Grid.Container>
        </div>
    );
}
export default UserList;