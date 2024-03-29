import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../../Firebase/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { Modal, Input, Card, Textarea, Grid, Button, Text } from "@nextui-org/react";

const AddForumPost = () => {
    const [user, loading, error] = useAuthState(auth);
    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const handler = () => setVisible(true);

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

    const newPostRef = doc(collection(db, "forumPosts"));

    const data = {
        userUID: user?.uid,
        userProfilePicture: user?.photoURL,
        userName: user?.displayName,
        postTitle: title,
        postContent: content,
        forum: "Introductions",
        postID: newPostRef.id
    }

    const createForumPost = async () => {
        try {
            await setDoc(newPostRef, data)
            alert("Post created successfully")
        } catch (err) {
            console.error(err);
            alert("An error occured while creating your post");
        }
    }

    return (
        <div className="AddForumPost">
            <Card>
                <Card.Header>
                    <Text size={20} b>Introductions</Text>
                </Card.Header>
                <Card.Divider />
                <Card.Body css={{ py: "$10" }}>
                    <Text>
                        Introduce yourself here
                    </Text>
                </Card.Body>
                <Card.Divider />
                <Grid.Container gap={2} >
                    <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Button auto bordered color="primary" onPress={handler}>
                            Add Post
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
                                    Introduce yourself here
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
                                    placeholder="Post Title"
                                    onChange={handleTitleChange}
                                    id="postTitle"
                                />
                                <Textarea
                                    bordered
                                    color="secondary"
                                    labelPlaceholder="Your message"
                                    label="Content"
                                    value={content}
                                    onChange={handleContentChange}
                                    id="postContent"
                                />
                            </Modal.Body>
                            <Modal.Footer>
                                <Button auto onClick={createForumPost}>
                                    Submit
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </Grid>
                </Grid.Container>
            </Card>
        </div>
    );
};

export default AddForumPost;