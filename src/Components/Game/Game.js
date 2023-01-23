import React from "react";
import './Game.css'
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import FormControl from '@mui/material/FormControl';
import { auth, db } from "../../Firebase/firebase";
import { collection, addDoc, setDoc, doc } from "firebase/firestore";
import { Modal, Dropdown, Card, Col, Row, Button, Text } from "@nextui-org/react";

const Game = ({ game }) => {

  const [user, loading, error] = useAuthState(auth);
  const [visible, setVisible] = React.useState(false);
  const [selected, setSelected] = React.useState('');
  const [selectedRating, setSelectedRating] = React.useState('');
  const handler = () => setVisible(true);

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  const selectedRatingValue = React.useMemo(
    () => Array.from(selectedRating).join(", ").replaceAll("_", " "),
    [selectedRating]
  );

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  const docRef = doc(db, "users/" + user.uid + "/favourites", game.slug);

  const data = {
    game: game,
    Status: selectedValue,
    Rating: selectedRatingValue,
    userUID: user.uid
  }

  const addToList = async () => {
    try {
      setDoc(docRef, data)
      alert("Game added successfully")
    } catch (err) {
      console.error(err);
      alert("An error occured while adding a game");
    }
  }

  return (
    <div className="HomeComponent">
      <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
        <Card.Body css={{ p: 0 }}>
          <Link to={`/games/${game.id}`}>
            <Card.Image
              src={game.background_image}
              width="100%"
              height="100%"
              objectFit="cover"
              alt="Card example background"
            />
          </Link>
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: "absolute",
            bgBlur: "#ffffff66",
            borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color="#000" size={12}>
                {game.name}
              </Text>
              <Text color="#000" size={12}>
                Rating: {game.rating}
              </Text>
            </Col>
            <Col>
              <Row justify="flex-end">
                <Button flat auto rounded color="secondary" onClick={handler}>
                  <Text
                    css={{ color: "inherit" }}
                    size={12}
                    weight="bold"
                    transform="uppercase"
                  >
                    Add to list
                  </Text>
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
                      {game.name}
                    </Text>
                  </Modal.Header>
                  <Modal.Body >
                    <FormControl sx={{ width: '35ch' }}>
                      <div className="status-select">
                        <Text size={14} css={{ textAlign: "center" }}>
                          Status
                        </Text>
                        <Dropdown>
                          <Dropdown.Button flat color="secondary" css={{ tt: "capitalize" , marginLeft: "30%"}}>
                            {selectedValue}
                          </Dropdown.Button>
                          <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selected}
                            onSelectionChange={setSelected}
                          >
                            <Dropdown.Item key="Completed">Completed</Dropdown.Item>
                            <Dropdown.Item key="Playing">Playing</Dropdown.Item>
                            <Dropdown.Item key="Dropped">Dropped</Dropdown.Item>
                            <Dropdown.Item key="Plan to play">Plan to play</Dropdown.Item>
                            <Dropdown.Item key="On-hold">On-hold</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                      <div className="rating-select">
                        <Text size={14} css={{ textAlign: "center" }}>
                          Rating
                        </Text>
                        <Dropdown>
                          <Dropdown.Button flat color="secondary" css={{ tt: "capitalize", marginLeft: "30%" }}>
                            {selectedRatingValue}
                          </Dropdown.Button>
                          <Dropdown.Menu
                            aria-label="Single selection actions"
                            color="secondary"
                            disallowEmptySelection
                            selectionMode="single"
                            selectedKeys={selectedRating}
                            onSelectionChange={setSelectedRating}
                          >
                            <Dropdown.Item key="1">1</Dropdown.Item>
                            <Dropdown.Item key="2">2</Dropdown.Item>
                            <Dropdown.Item key="3">3</Dropdown.Item>
                            <Dropdown.Item key="4">4</Dropdown.Item>
                            <Dropdown.Item key="5">5</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </FormControl>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button auto flat color="error" onClick={closeHandler}>
                      Close
                    </Button>
                    <Button auto onClick={() => {
                      addToList()
                    }}>
                      Submit
                    </Button>
                  </Modal.Footer>
                </Modal>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default Game;