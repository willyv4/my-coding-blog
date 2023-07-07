import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import PostDetail from "./Components/Post/PostDetail";
// import { useSelector } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";
import { CLERK_KEY } from "./config.js";
import Footer from "./Components/Footer";
import AdminSignIn from "./Components/Auth/AdminSignIn";
// import { getAllPosts } from "./redux/actionTypes";
import { useState } from "react";
// import { useDispatch } from "react-redux";

function App() {
  return (
    <div>
      <ClerkProvider publishableKey={CLERK_KEY}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/:postid" element={<PostDetail />} />
            <Route path="/admin" element={<AdminSignIn />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ClerkProvider>
    </div>
  );
}

export default App;
