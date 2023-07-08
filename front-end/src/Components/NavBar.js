import { useState } from "react";
import { NavLink } from "react-router-dom";
import AddFormIcon from "../icons/AddFormIcon";
import PostForm from "./Post/PostForm";
import { useAuth, SignOutButton } from "@clerk/clerk-react";
import { willId } from "../config";

const NavBar = () => {
  const [showForm, setShowForm] = useState(false);
  const { userId } = useAuth();
  const isWill = userId === willId ? true : false;

  return (
    <div className="navbar  p-4 absolute z-30">
      <div className="flex-1">
        <NavLink
          to="/"
          className="font-bold text-xs sm:text-2xl text-primary ml-8 bg-gradient-to-r from-primary/90 via-secondary-90 to-accent/90 bg-clip-text text-transparent"
        >
          <code>
            <span className="font-bold">{"< "}WILL'S DEV </span>
            <span className="blog-title">BlOG {"/>"}</span>
          </code>
        </NavLink>
      </div>
      {isWill && (
        <>
          <div className="mr-4 text-xs sm:text-xl font-bold text-accent/70">
            <SignOutButton />
          </div>
          <div
            className="flex text-xs sm: font-bold text-primary p-1 rounded-sm mr-8 cursor-pointer"
            onClick={() => setShowForm(true)}
          >
            <AddFormIcon />
            {showForm && <PostForm setShowForm={setShowForm} />}
          </div>
        </>
      )}
    </div>
  );
};
export default NavBar;
