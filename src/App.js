import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import PostDetail from "./Components/Post/PostDetail";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((st) => st.posts);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Hero posts={posts} />} />
          <Route path="/:postid" element={<PostDetail posts={posts} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
