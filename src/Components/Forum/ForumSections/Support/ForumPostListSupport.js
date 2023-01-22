import React, { useState, useEffect } from "react";
import { auth, db } from "../../../../Firebase/firebase";
import { collection, getDocs, deleteDoc, query, where, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import ForumPostsList from "../../ForumList/ForumPostsList";

const ForumPostsListSupport = () => {

  const [posts, setPosts] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    const postsRef = collection(db, "forumPosts");
    const q = query(postsRef, where("forum", "==", "Support"));
    const getPosts = async () => {
      onSnapshot(q, (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })
    }
    getPosts()
  }, []);

  return (
    <div className="ForumPostsListSupport">
      <ForumPostsList posts={posts} />
    </div>
  )
};

export default ForumPostsListSupport;