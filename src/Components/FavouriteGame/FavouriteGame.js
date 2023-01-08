import React from "react";
import { Link } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs, deleteDoc, where, query } from "firebase/firestore";
import { Card, Col, Row, Text, Button } from "@nextui-org/react";

const FavouriteGame = ({ game, rating, status, id }) => {

  const [user, loading, error] = useAuthState(auth);

  const deleteItem = async () => {
    if (user) {
      const d = query(collection(db, "users/" + user.uid + "/favourites"), where('game.id', '==', id));
      const docSnap = await getDocs(d);
      docSnap.forEach((doc) => {
        console.log(doc.data())
        deleteDoc(doc.ref);
      });
    }
  }

  return (
    <div className="FavouriteComponent">
      <Card css={{ display: 'block', justifyContent: 'space-between', flexDirection: 'column', backgroundColor: "#EEFFFF" }} isHoverable>
        <Card.Body css={{ p: 0 }}>
          <Link to={`/games/${game.id}`}>
            <Card.Image
              src={game.background_image}
              width={900}
              height={500}
              objectFit="cover"
              alt="Game card"
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
                Rating: {rating}
              </Text>
              <Text color="#000" size={12}>
                 Status: {status}
              </Text>
              <Button onClick={() => { deleteItem() }} size="sm">
                Delete
              </Button>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default FavouriteGame;