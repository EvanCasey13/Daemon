import React, { useState, useEffect } from "react";
import { auth, db } from "../../../Firebase/firebase";
import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth"
import { Grid, Card, Text, Avatar, Row } from "@nextui-org/react";

const ForumPostsListSupport = () => {

  const [posts, setPosts] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  const postsRef = collection(db, "forumPosts");
  const q = query(postsRef, where("forum", "==", "Support"));

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        let getPosts = await getDocs(q);
        setPosts(getPosts.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        })))
      }
    });
  }, [posts])

  return (
    <div className="ForumPostsListSupport">
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

export default ForumPostsListSupport;