// frontend/src/components/Navigation/Navigation.jsx

import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const location = useLocation();

  const isHome = location.pathname === "/";

  return (
    <ul className={isHome ? "navBar home-nav" : "navBar standard-nav"}>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      {isLoaded && (
        <>
          <li className="nav-items-inline">
            {sessionUser && <Link to="/spots/new">Create New Listing</Link>}

            <ProfileButton user={sessionUser} />
          </li>
        </>
      )}
    </ul>
  );
}

export default Navigation;
