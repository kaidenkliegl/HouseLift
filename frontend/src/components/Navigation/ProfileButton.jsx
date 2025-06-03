import { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import * as sessionActions from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignUpFormModal";
import { NavLink } from "react-router-dom";
import "./ProfileButton.css";

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

  const closeMenu = () => setShowMenu(false);

  const toggleMenu = (e) => {
    e.stopPropagation(); // Keep from bubbling up to document and triggering closeMenu
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");

  const handleDemoUser = () => {
    dispatch(
      sessionActions.login({ credential: "demo@user.io", password: "password" })
    );
    setShowMenu(false);
  };

  return (
    <>
      <button onClick={toggleMenu} className="profile-btn">
        <img
          className="profile-hamburger"
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiPjxwYXRoIGQ9Ik0gMCA3LjUgTCAwIDEyLjUgTCA1MCAxMi41IEwgNTAgNy41IFogTSAwIDIyLjUgTCAwIDI3LjUgTCA1MCAyNy41IEwgNTAgMjIuNSBaIE0gMCAzNy41IEwgMCA0Mi41IEwgNTAgNDIuNSBMIDUwIDM3LjUgWiIvPjwvc3ZnPg=="
        />
        {user ? (
          <h3 className="user-Letter">{user.firstName.charAt(0)}</h3>
        ) : (
          <FaUserCircle className="user-Icon" />
        )}
      </button>
      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li className="user-name">
              Hello, {user.firstName} {user.lastName}
            </li>
            <li>{user.email}</li>

            <li>
              <NavLink
                to="/spots/current"
                onClick={() => closeMenu()}
                className="manage-link"
              >
                Manage Spots
              </NavLink>
            </li>
            <li>
              <button
              className="log-out-btn"
                onClick={(e) => {
                  logout(e);
                  setShowMenu(false);
                }}
              >
                Log Out
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <OpenModalButton
                className={"login-signup"}
                buttonText="Log In"
                modalComponent={<LoginFormModal />}
              />
            </li>
            <li>
              <OpenModalButton
                className={"login-signup"}
                buttonText="Sign Up"
                modalComponent={<SignupFormModal />}
              />
            </li>
            <li>
              <button className="demo-btn" onClick={handleDemoUser}>
                Login with demo user
              </button>
            </li>
          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
