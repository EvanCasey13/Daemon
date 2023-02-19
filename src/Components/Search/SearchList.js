import React from "react";
import UserSearchList from "./SearchListPage"
import { Grid } from "@nextui-org/react";

function UserList({ users }) {
    return (
        <div className="UsersList">
            <Grid.Container >
                <UserSearchList users={users} />
            </Grid.Container>
        </div>
    );
}
export default UserList;