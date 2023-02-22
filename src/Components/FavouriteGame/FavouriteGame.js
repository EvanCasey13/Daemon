import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'reactjs-popup/dist/index.css';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../Firebase/firebase";
import { collection, getDocs, deleteDoc, where, query } from "firebase/firestore";
import { Card, Col, Row, Text, Button } from "@nextui-org/react";
import BinIcon from "../../Icons/BinIcon";

const FavouriteGame = ({ game, rating, status, id, userUID }) => {
  let params = useParams();
  const [user, loading, error] = useAuthState(auth);
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState("")

  useEffect(() => {
    const userRef = collection(db, "users/");
    const q = query(userRef, where("uid", "==", userId));
    const getUser = async () => {
      const data = await getDocs(q)
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    }
    getUser()
  }, [userId]);

  const deleteItem = async (gameID) => {
    const d = query(collection(db, "users/" + user.uid + "/favourites"), where('game.id', '==', gameID));
    const docSnap = await getDocs(d);
    docSnap.forEach((doc) => {
      console.log(doc.data())
      deleteDoc(doc.ref);
    });
  }

  return (
    <div className="FavouriteComponent">
      <Card css={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} isHoverable>
        <Card.Body css={{ p: 0 }}>
          <Link to={`/games/${game.id}`}>
            <Card.Image
              src={game.background_image}
              width={600}
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
              {userUID === user?.uid && (
                <>
                  <Button color="error" onClick={() => { deleteItem(game.id) }} size="sm" icon={<BinIcon fill="currentColor" filled />}>
                    Delete
                  </Button>
                </>
              )}
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </div>
  )
}
export default FavouriteGame;