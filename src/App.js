import { useState } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import PostDetail from "./Components/PostDetail";

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (postData) => {
    setPosts((prevPosts) => [...prevPosts, postData]);
  };

  console.log(posts);

  return (
    <BrowserRouter>
      <NavBar addPost={addPost} />
      <Hero />
      <Routes>
        <Route path="/:postid" element={<PostDetail posts={posts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
