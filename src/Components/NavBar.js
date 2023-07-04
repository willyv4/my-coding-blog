import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddFormIcon from "../icons/AddFormIcon";
import PostForm from "./PostForm";

const NavBar = ({ addPost }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="navbar p-4 bg-neutral fixed z-20">
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
    </div>
  );
};
export default NavBar;
