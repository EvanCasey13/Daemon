import React, { useState, useEffect } from "react";
import { db } from "../../Firebase/firebase";
import { collection, getDocs, deleteDoc, query, where, onSnapshot } from "firebase/firestore";
import { Table, Row, Col, Tooltip, Avatar, Text } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import IconButton from "../IconButton/IconButton";
import DeleteIcon from "../../Icons/BinIcon";

const UserTable = () => {

    const [users, setUsers] = useState([]);
    let params = useParams();

    const deleteUser= async (userUID) => {
        const d = query(collection(db, "users"), where('uid', '==', userUID));
        const docSnap = await getDocs(d);
        docSnap.forEach((doc) => {
          deleteDoc(doc.ref);
        });
      }

    useEffect(() => {
        const usersRef = collection(db, "users");
        const getUsers = async () => {
            onSnapshot(usersRef, (data) => {
                setUsers((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
            })
        }
        getUsers()
    }, [params.id]);

    const columns = [
        { name: "AVATAR", uid: "avatar" },
        { name: "EMAIL", uid: "email" },
        { name: "ROLE", uid: "role" },
        { name: "AUTHPROVIDER", uid: "authProvider" },
        { name: "ACTIONS", uid: "actions" }
    ];

    const renderCell = (user, columnKey) => {
        const cellValue = user[columnKey];
        switch (columnKey) {
            case "email":
                return (
                    <Col>
                        <Row>
                            <Text b size={14}>
                                {user.email}
                            </Text>
                        </Row>
                    </Col>
                );
            case "authProvider":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {user.authProvider}
                            </Text>
                        </Row>
                    </Col>
                );
            case "avatar":
                return (
                    <Row>
                        <Avatar
                            squared
                            src={user.profilePicture} />
                    </Row>
                );
            case "role":
                return (
                    <Col>
                        <Row>
                            <Text b size={14} css={{ tt: "capitalize" }}>
                                {cellValue}
                            </Text>
                        </Row>
                    </Col>
                );

            case "actions":
                return (
                    <Row justify="center" align="center">
                        <Col css={{ d: "flex" }}>
                            <Tooltip
                                content="Delete user"
                                color="error"
                                onClick={() => { deleteUser(user.uid) }}
                            >
                                <IconButton>
                                    <DeleteIcon size={20} fill="#FF0080" />
                                </IconButton>
                            </Tooltip>
                        </Col>
                    </Row>
                );
            default:
                return cellValue;
        }
    };

    return (
        <div className="userTable">
            <Text h3>Users</Text>
            <Table
                aria-label="Example table with custom cells"
                css={{
                    height: "auto",
                    minWidth: "100%",
                }}
                selectionMode="none"
            >
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column
                            key={column.uid}
                            hideHeader={column.uid === "actions"}
                            align={column.uid === "actions" ? "center" : "start"}
                        >
                            {column.name}
                        </Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={users}>
                    {(item) => (
                        <Table.Row>
                            {(columnKey) => (
                                <Table.Cell>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </div>
    )
};

export default UserTable;