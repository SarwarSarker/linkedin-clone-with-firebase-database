import Avatar from "@material-ui/core/Avatar";
import AssignmentIcon from "@material-ui/icons/Assignment";
import PhotoIcon from "@material-ui/icons/Photo";
import TodayIcon from "@material-ui/icons/Today";
import YouTubeIcon from "@material-ui/icons/YouTube";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import FlipMove from "react-flip-move";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { db } from "../firebase";
import Post from "../Post/Post";
import "./feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  const user = useSelector(selectUser);

  const submitPost = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: input,
        message: "Web Develper",
        imgUrl: user.photoURL,
        timestamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setInput("");
  };

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    const newPost = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
    return newPost;
  }, []);

  return (
    <div className="feed">
      <div className="feed__input">
        <div className="feed__form">
          <Avatar src={user.photoURL} />
          <form onSubmit={submitPost}>
            <input
              type="text"
              value={input}
              placeholder="Start a Post"
              onChange={(e) => setInput(e.target.value)}
            />
            <input type="submit" />
          </form>
        </div>

        <div className="feed__option">
          <div className="option">
            <PhotoIcon style={{ color: "#5abbff" }} />
            <span>Photo</span>
          </div>
          <div className="option">
            <YouTubeIcon style={{ color: "rgb(108 191 102)" }} />
            <span>Video</span>
          </div>
          <div className="option">
            <TodayIcon style={{ color: "rgb(195 139 70)" }} />
            <span>Event</span>
          </div>
          <div className="option">
            <AssignmentIcon style={{ color: "rgb(255 120 107)" }} />
            <span>Write Article</span>
          </div>
        </div>
      </div>

      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            message={post.message}
            decription={post.description}
            imgUrl={post.imgUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
