import React, { useState, useEffect } from "react";
import { db } from "../../../../Firebase/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { Input } from "@nextui-org/react";
import ForumPostsList from "../../ForumList/ForumPostsList";

const ForumPostsListUA = () => {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const postsRef = collection(db, "forumPosts");
    const q = query(postsRef, where("forum", "==", "Updates and Announcements"));
    const getPosts = async () => {
      onSnapshot(q, (data) => {
        setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      })
    }
    getPosts()
  }, []);

  useEffect(() => {
    setFilteredPosts(
      posts.filter(
        (post) =>
          post.postTitle.toLowerCase().includes(search.toLowerCase()) ||
          post.userName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, posts]);

  return (
    <div className="ForumPostsListUA">
     <br />
      <Input
        id="filled-search"
        bordered
        fullWidth
        labelPlaceholder="Search for a post"
        color="default"
        onChange={(e) => setSearch(e.target.value)} />
      <ForumPostsList posts={filteredPosts} />
    </div>
  )
};

export default ForumPostsListUA;