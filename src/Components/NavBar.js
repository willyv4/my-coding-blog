import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddFormIcon from "../icons/AddFormIcon";
import PostForm from "./Post/PostForm";

const NavBar = ({ addPost }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="navbar  p-4   ">
      <div className="flex-1">
        <NavLink to="/" className="font-bold text-2xl text-primary">
          WILL'S BlOG
        </NavLink>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <div
            className="flex font-bold text-primary p-1 rounded-sm "
            onClick={() => setShowForm(true)}
          >
            <AddFormIcon /> Add Post
            {showForm && <PostForm setShowForm={setShowForm} />}
          </div>
        </ul>
      </div>
    </div>
  );
};
export default NavBar;
