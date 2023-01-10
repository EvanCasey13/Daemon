import React from "react";
import { Grid, Card, Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';

const ForumList = () => {

    return (
        <Card>
        <Grid.Container gap={2} >
        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card css={{ mw:"100%" }}>
            <Card.Header>
              <Text b>Daemon</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/announcements`}>Updates and Announcements</Link>
              <Text>
                Updates, Announcements and changes to Daemon.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/guidelines`}>Daemon Guidelines</Link>
              <Text>
                Forum rules, site rules & other various useful information.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/suggestions`}>Suggestions</Link>
              <Text>
                Post any suggestions for the site here.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/support`}>Support</Link>
              <Text>
                Have an issue or found a bug, post it here.
              </Text>
            </Card.Body>
            <Card.Divider />
          </Card>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card css={{ mw:"100%" }}>
            <Card.Header>
              <Text b>Games</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/news`}>News</Link>
              <Text>
                Current news in the gaming industry.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/gameannouncements`}>Game Announcements</Link>
              <Text>
                Discussion about upcoming games or DLC.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/recommendations`}>Game Recommendations</Link>
              <Text>
                See what the community is currently playing.
              </Text>
            </Card.Body>
            <Card.Divider />
          </Card>
        </Grid>
        </Grid.Container>
        </Card>
      );
};

export default ForumList;