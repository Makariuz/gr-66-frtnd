import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "context";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseSquare } from "react-icons/ai";

export function Navbar() {
  const { logout, user } = useContext(AuthContext);

  const [showMenu, setShowMenu] = useState(false);

  const [dropDown, setDropDown] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
    /*    handleShow() */
  };

  /*   const handleShow = () => {
    setTimeout(() => {
      setDropDown(!dropDown)
    }, 800)
  } */
  return (
    <nav className="nav-top-bar">
      {/*    
        --- FOR DESKTOPP ---
   <ul>
        <li>MENU</li>
        <li>ABOUT</li>
        <li>MISSING ST.</li>
        <li>STORE</li>
        <li>LOGIN / SIGNUP</li>
      </ul> 
      */}

      {!showMenu ? (
        <GiHamburgerMenu
          size="45"
          className={"hamburger-menu " + (!showMenu && " open")}
          onClick={handleShowMenu}
        />
      ) : (
        <>
          <AiOutlineCloseSquare
            size="45"
            className={"hamburger-menu " + (showMenu && " close")}
            onClick={handleShowMenu}
          />
          <Menu />
        </>
      )}

      <h1> <Link to="/landing"> GOSPEL ROAD 66 </Link></h1>
    </nav>
  );
}

function Menu({ test }) {
  return (
    <ul className={"menu-items " + (test && "drop")}>
      <Link to="/blog">
        <li>BLOG</li>
      </Link>
      <Link to="/mission">
        <li>MISSION ST.</li>
      </Link>
      <Link to="/store">
      <li>STORE</li>
      </Link>
     {/*  <Link to="/login">
        <li>LOGIN / SIGNUP</li>
      </Link> */}
    </ul>
  );
}
