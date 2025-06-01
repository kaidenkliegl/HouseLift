// frontend/src/components/Navigation/Navigation.jsx
import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import { useLocation } from "react-router-dom";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  const location = useLocation();

  const isHome = location.pathname === "/";

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled((prev) => {
        const shouldBeScrolled = scrollY > 70;
        return prev !== shouldBeScrolled ? shouldBeScrolled : prev;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  return (
    <div
      className={`navBar ${isHome ? "home-nav" : "standard-nav"} ${
        isHome && scrolled ? "scrolled" : ""
      }`}
    >
      <div>
        <NavLink to="/" className="home-btn">
          Stayo
        </NavLink>
      </div>
      {isLoaded && (
        <>
          <div className="nav-items-inline">
            {sessionUser && (
              <Link to="/spots/new" className="create-listing-btn">
                Create New Listing
              </Link>
            )}
            <ProfileButton user={sessionUser} />
          </div>
        </>
      )}
      {isHome && !scrolled && (
        <div>
          <div className="search-bar">
            <input type="search" placeholder="Country" />
            <input type="search" placeholder="City" />
            <input type="search" placeholder="State" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Navigation;
