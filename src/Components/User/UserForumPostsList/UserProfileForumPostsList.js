import React, { useState, useEffect } from "react";
import { auth, db } from "../../../Firebase/firebase";
import { collection, getDocs, deleteDoc, query, where, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import ForumPostsList from "../../../Components/Forum/ForumList/ForumPostsList";
import { useParams } from "react-router-dom";

const UserProfileForumPostsList = () => {

  const [user, loading, error] = useAuthState(auth);
  const [userPosts, setUserPosts] = useState([]);
  let params = useParams();

  useEffect(() => {
    const postsRef = collection(db, "forumPosts");
    const q = query(postsRef, where("userUID", "==", params.id));
    const getUserPosts = async () => {
      onSnapshot(q, (data) => {
        setUserPosts((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))))
      })
    }
    getUserPosts()
  }, [params.id]);

  return (
    <div className="UserForumPostsList">
      <ForumPostsList posts={userPosts} />
    </div>
  )
};

export default UserProfileForumPostsList;