import { Route, BrowserRouter, Routes } from "react-router-dom";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import PostDetail from "./Components/Post/PostDetail";
import { ClerkProvider } from "@clerk/clerk-react";
import Footer from "./Components/Footer";
import AdminSignIn from "./Components/Auth/AdminSignIn";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <div>
      <ClerkProvider publishableKey={process.env.CLERK_KEY}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/:postid" element={<PostDetail />} />
            <Route path="/admin" element={<AdminSignIn />} />
            <Route path="/about" element={<AboutMe />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ClerkProvider>
    </div>
  );
}

export default App;
