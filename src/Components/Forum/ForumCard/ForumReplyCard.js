import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../../Firebase/firebase";
import { Card, Grid, Button, Text, Avatar} from "@nextui-org/react";
import { useParams, Link } from "react-router-dom";
import { collection, getDocs, deleteDoc, query, where } from "firebase/firestore";

const ForumReplyCard = ({ reply }) => {
  let params = useParams();
  const [user, loading, error] = useAuthState(auth);

  const deleteItem = async (replyID) => {
    const d = query(collection(db, "forumPosts/" + params.id + "/replies"), where('replyID', '==', replyID));
    const docSnap = await getDocs(d);
    docSnap.forEach((doc) => {
      deleteDoc(doc.ref);
    });
  }
  return (
    <div className="ForumReplyCard">
      <Grid.Container gap={2}>
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card>
            <Card.Header>
              <Link to={`/profile/${reply.userUID}`}>
                <Avatar
                  size="lg"
                  src={reply.userProfilePicture}
                  color="primary"
                  bordered
                />
              </Link>
              <Text b>{reply.userName}</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
              <Text h3>
                {reply.replyTitle}
              </Text>
              <Text>
                {reply.replyContent}
              </Text>
              {reply.userName === user.displayName && (
                <>
                  <Button onClick={() => { deleteItem(reply.replyID) }} size="sm">
                    Delete
                  </Button>
                </>
              )}
            </Card.Body>
            <Card.Divider />
          </Card>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default ForumReplyCard;