import React from "react";
import { auth, db } from "../../../Firebase/firebase";
import { collection, getDocs, deleteDoc, query, where } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { Grid, Card, Text, Avatar, Button, Col, Row } from "@nextui-org/react";
import BinIcon from "../../../Icons/BinIcon";

const ForumCard = ({ post }) => {

  const [user, loading, error] = useAuthState(auth);

  const deleteItem = async (postID) => {
    const d = query(collection(db, "forumPosts"), where('postID', '==', postID));
    const docSnap = await getDocs(d);
    docSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }

  return (
    <div className="ForumPostCard">
      <Grid.Container gap={1}>
        <Grid.Container gap={2}>
          <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
            <Card>
              <Card.Header>
                <Link to={`/profile/${post.userUID}`}>
                  <Avatar
                    size="lg"
                    src={post.userProfilePicture}
                    color="primary"
                    bordered
                  />
                </Link>
                <Text b>{post.userName}</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Link to={`/forum/post/${post.postID}`}>
                  <Text h3>
                    {post.postTitle}
                  </Text>
                </Link>
                <Text>
                  {post.postContent}
                </Text>
                {post.userName === user.displayName && (
                  <>
                    <Col>
                      <Row justify="center" css={{ paddingTop:"1%" }}>
                      <Button auto color="error" onClick={() => { deleteItem(post.postID) }} size="sm" icon={<BinIcon fill="currentColor" filled />}>
                          <Text
                            css={{ color: "inherit" }}
                            size={12}
                            weight="bold"
                            transform="uppercase"
                          >
                            Delete Post
                          </Text>
                        </Button>
                        </Row>
                        </Col>
                      </>
                    )}
                    </Card.Body>
                    <Card.Divider />
                  </Card>
              </Grid>
            </Grid.Container>
        </Grid.Container>
    </div>
  )
};

export default ForumCard;