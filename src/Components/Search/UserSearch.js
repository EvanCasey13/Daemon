import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { collection, onSnapshot } from "firebase/firestore";
import { Text, Input } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import UserList from "./SearchList";

const UserSearch = () => {

    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    let params = useParams();

    useEffect(() => {
        const usersRef = collection(db, "users");
        const getUsers = async () => {
            onSnapshot(usersRef, (data) => {
                setUsers((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            })
        }
        getUsers()
    }, [params.id]);

    useEffect(() => {
        setFilteredUsers(
            users.filter(
                (user) =>
                    user.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, users]);

    return (
        <div className="userTable">
            <Text h3>Users</Text>
            <Input
                id="filled-search"
                bordered
                fullWidth
                labelPlaceholder="Search for a user"
                color="default"
                onChange={(e) => setSearch(e.target.value)} />
           <UserList users={filteredUsers} />
        </div>
    )
};

export default UserSearch;