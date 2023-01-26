import React from "react";
import { Grid, Card, Text } from "@nextui-org/react";
import { Link } from 'react-router-dom';
import AnnouncementIcon from "../../Icons/AnnouncementIcon";
import GuidelinesIcon from "../../Icons/GuidelinesIcon";
import SuggestionIcon from "../../Icons/SuggestionIcon";
import SupportIcon from "../../Icons/SupportIcon";
import NewsIcon from "../../Icons/NewsIcon";
import GameAnnouncementIcon from "../../Icons/GameAnnouncementIcon";
import RecommendedIcon from "../../Icons/RecommendedIcon";
import CGTSupportIcon from "../../Icons/CGTSupportIcon";
import IntroductionsIcon from "../../Icons/IntroductionsIcon";
import DiscussionIcon from "../../Icons/DiscussionIcon";

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
            <Link to={`/forum/announcements`}><AnnouncementIcon /><br/>Updates and Announcements</Link>
              <Text>
                Updates, Announcements and changes to Daemon.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/guidelines`}><GuidelinesIcon /><br/>Daemon Guidelines</Link>
              <Text>
                Forum rules, site rules & other various useful information.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/suggestions`}><SuggestionIcon /><br/>Suggestions</Link>
              <Text>
                Post any suggestions for the site here.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/support`}><SupportIcon /><br/>Support</Link>
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
            <Link to={`/forum/news`}><NewsIcon /><br/>News</Link>
              <Text>
                Current news in the gaming industry.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/gameannouncements`}><GameAnnouncementIcon /><br/>Game Announcements</Link>
              <Text>
                Discussion about upcoming games or DLC.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/recommendations`}><RecommendedIcon /><br/>Game Recommendations</Link>
              <Text>
                See what the community is currently playing.
              </Text>
            </Card.Body>
            <Card.Divider />
          </Card>
        </Grid>

        <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
          <Card css={{ mw:"100%" }}>
            <Card.Header>
              <Text b>General</Text>
            </Card.Header>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/games-tech-computer-support`}><CGTSupportIcon /><br/>Computers, Games & Tech support</Link>
              <Text>
                Have an Issue?, ask our community for help with a related question.
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/introductions`}><IntroductionsIcon /><br/>Introductions</Link>
              <Text>
                Introduce yourself here
              </Text>
            </Card.Body>
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
            <Link to={`/forum/casual-discussion`}><DiscussionIcon /><br/>Casual Discussion</Link>
              <Text>
                General interest topics that do not fall into the above sections.
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