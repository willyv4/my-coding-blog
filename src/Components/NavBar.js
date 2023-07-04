import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddFormIcon from "../icons/AddFormIcon";
import PostForm from "./PostForm";
import Hero from "./Hero";

const NavBar = ({ addPost }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="navbar p-4 bg-neutral">
      <div className="flex-1">
        <NavLink to="/home" className="font-bold text-2xl text-secondary">
          WILL'S BlOG
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <div
            className="flex font-bold text-secondary p-1 rounded-sm -mb-2"
            onClick={() => setShowForm(true)}
          >
            <AddFormIcon /> Add Post
            {showForm && (
              <PostForm setShowForm={setShowForm} addPost={addPost} />
            )}
          </div>
        </ul>
      </div>
      <Hero />
    </div>
  );
};
export default NavBar;
