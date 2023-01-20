import React, { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import { Text, Badge, Image, Avatar, Popover, Grid, Card, Row, Col, Collapse, Button } from "@nextui-org/react";
import { useParams } from "react-router-dom";
import NavBar from '../../Navbar/Navbar';
import { auth, db } from "../../../Firebase/firebase";
import { collection, getDocs, deleteDoc, query, where } from "firebase/firestore";

const ForumThread = () => {
    let params = useParams();
    const [post, setPost] = useState([]);

    useEffect(() => {
        const d = query(collection(db, "forumPosts"), where('postID', '==', params.id));
        const getPost = async () => {
            const data = await getDocs(d)
            setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPost()
    }, [params.id]);

    return (
        <div className="ForumThread">
            <NavBar />
            {post.map(p => {
                return (
                    <Button>
                        {p.postTitle}
                    </Button>
                )
            })}
        </div>
    )
};

export default ForumThread;