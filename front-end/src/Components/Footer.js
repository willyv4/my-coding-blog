import { NavLink } from "react-router-dom";
import GitHub from "../icons/GitHub";

import LinkedIn from "../icons/LinkedIn";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gradient-to-b from-base-100/90 to-base-200 text-base-content rounded h-72">
      <div className="grid grid-flow-col gap-4 -mb-40">
        <NavLink to="/about" className="NavLink link-hover">
          About
        </NavLink>
        <a className="link link-hover" href="mailto:will.valadez4@gmail.com">
          Contact
        </a>
        <NavLink className="link link-hover" to="/admin">
          Admin
        </NavLink>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/williamvaladez/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn />
          </a>
          <a href="https://github.com/willyv4" target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
