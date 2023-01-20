import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/firebase";
import { Card,  Grid, Button, Text, Avatar } from "@nextui-org/react";

const ForumReplyCard = ({ reply }) => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="ForumReplyCard">
     <Grid.Container gap={2}>
              <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
                <Card>
                  <Card.Header>
                    <Avatar
                      size="lg"
                      src={reply.userProfilePicture}
                      color="primary"
                      bordered
                    />
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
                        <Button onClick={() => {  }} size="sm">
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