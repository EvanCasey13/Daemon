import React, { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { Modal, Input, Card, Textarea, Grid, Button, Text, Avatar } from "@nextui-org/react";
import { useParams, Link, useLocation } from "react-router-dom";
import NavBar from '../../Navbar/Navbar';
import { auth, db } from "../../../Firebase/firebase";
import { collection, getDocs, query, where, doc, setDoc, onSnapshot } from "firebase/firestore";
import ForumRepliesList from '../ForumReplyListPage/forumReplyListPage';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

const ForumThread = () => {
    let params = useParams();
    const [user, loading, error] = useAuthState(auth);
    const [post, setPost] = useState([]);
    const [replies, setReplies] = useState([]);
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handler = () => setVisible(true);
    const breadcrumbs = useBreadcrumbs();
    const location = useLocation();

    const addReply = async (postID) => {
        const docRef = doc(collection(db, "forumPosts/" + postID + "/replies"));
        post.map(p => {
            const data = {
                userUID: user?.uid,
                userProfilePicture: user?.photoURL,
                userName: user?.displayName,
                replyTitle: title,
                replyContent: content,
                replyID: docRef.id,
                postID: p.postID
            }

            try {
                setDoc(docRef, data)
                alert("Reply added")
            } catch (err) {
                console.error(err);
                alert("An error occured while replying to this post");
            }
        })
    }

    const closeHandler = () => {
        setVisible(false);
        console.log("closed");
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }

    const handleContentChange = (e) => {
        setContent(e.target.value)
    }

    useEffect(() => {
        const d = query(collection(db, "forumPosts"), where('postID', '==', params.id));
        const getPost = async () => {
            const data = await getDocs(d)
            setPost(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        }
        getPost()
    }, [params.id]);

    useEffect(() => {
        const d = query(collection(db, "forumPosts/" + params.id + "/replies"), where('postID', '==', params.id));
        const getReplies = async () => {
            onSnapshot(d, (data) => {
                setReplies(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
            })
        }
        getReplies()
    }, [params.id]);

    return (
        <div className="ForumThread">
            <NavBar />
            <nav>
                <Link to="/"
                    className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Home/
                </Link>
                <Link to="/forumhomepage"
                    className={location.pathname.startsWith("/forumhomepage") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Forum/
                </Link>
                <Link to={`/post/${params.id}`}
                    className={location.pathname.startsWith("/forum/post/") ? "breadcrumb-active" : "breadcrumb-not-active"}
                >
                    Post/{params.id}
                </Link>
            </nav>
            {post.map(p => {
                return (
                    <Card>
                        <Card.Header>
                            <Link to={`/profile/${p.userUID}`}>
                                <Avatar
                                    size="lg"
                                    src={p.userProfilePicture}
                                    color="primary"
                                    bordered
                                />
                            </Link>
                            <Text b>{p.userName}</Text>
                        </Card.Header>
                        <Card.Divider />
                        <Card.Divider />
                        <Card.Body css={{ py: "$10" }}>
                            <Text h3>
                                {p.postTitle}
                            </Text>
                            <Text>
                                {p.postContent}
                            </Text>
                        </Card.Body>
                        <Card.Divider />
                        <Grid.Container gap={2} >
                            <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Button auto bordered color="primary" onPress={handler}>
                                    Add Reply
                                </Button>
                                <Modal
                                    closeButton
                                    blur
                                    aria-labelledby="modal-title"
                                    open={visible}
                                    onClose={closeHandler}
                                >
                                    <Modal.Header>
                                        <Text id="modal-title" size={18}>
                                            {p.postTitle}
                                        </Text>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Input
                                            clearable
                                            bordered
                                            fullWidth
                                            value={title}
                                            color="primary"
                                            label="Title"
                                            size="lg"
                                            placeholder="Reply title"
                                            onChange={handleTitleChange}
                                            id="replyTitle"
                                        />
                                        <Textarea
                                            bordered
                                            color="secondary"
                                            labelPlaceholder="Your message"
                                            label="Content"
                                            value={content}
                                            onChange={handleContentChange}
                                            id="replyContent"
                                        />
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button auto onClick={() => { addReply(p.postID) }}>
                                            Submit
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </Grid>
                        </Grid.Container>
                    </Card>
                )
            })}
            <ForumRepliesList replies={replies} />
        </div>
    )
};

export default ForumThread;