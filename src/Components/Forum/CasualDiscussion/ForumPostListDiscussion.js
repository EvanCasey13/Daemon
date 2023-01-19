import React, { useState, useEffect } from "react";
import { auth, db } from "../../../Firebase/firebase";
import { collection, getDocs, deleteDoc, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth"
import { Grid, Card, Text, Avatar, Button } from "@nextui-org/react";

const ForumPostsListDiscussion = () => {

  const [posts, setPosts] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const deleteItem = async (postID) => {
    const d = query(collection(db, "forumPosts"), where('postID', '==', postID));
    const docSnap = await getDocs(d);
      docSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
}

  useEffect(() => {
    const postsRef = collection(db, "forumPosts");
    const q = query(postsRef, where("forum", "==", "Discussion"));
    const getPosts = async () =>{
      const data = await getDocs(q)
      setPosts(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    getPosts()
  }, []);

  return (
    <div className="ForumPostsListDiscussion">
      <Grid.Container gap={1}>
        {posts.map(post => {
          return (
            <Grid.Container gap={2}>
              <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card>
                  <Card.Header>
                    <Avatar
                      size="lg"
                      src={post.userProfilePicture}
                      color="primary"
                      bordered
                    />
                    <Text b>{post.userName}</Text>
                  </Card.Header>
                  <Card.Divider />
                  <Card.Body css={{ py: "$10" }}>
                  <Text h3>
                     {post.postTitle}
                    </Text>
                    <Text>
                     {post.postContent}
                    </Text>
                    {post.userName === user.displayName && (
                      <>
                        <Button onClick={() => { deleteItem(post.postID) }} size="sm">
                          Delete Post
                        </Button>
                      </>
                    )}
                  </Card.Body>
                  <Card.Divider />
                </Card>
              </Grid>
            </Grid.Container>
          )
        })}
      </Grid.Container>
    </div>
  )
};

export default ForumPostsListDiscussion;