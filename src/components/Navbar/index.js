import styles from "./Navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "context";
import { useContext } from "react";

export function Navbar() {
  const { logout, user } = useContext(AuthContext);
  return (
    <nav>
        <ul>
          <li>MENU</li>
          <li>ABOUT</li>
          <li>MISSING ST.</li>
          <li>STORE</li>
          <li>LOGIN / SIGNUP</li>
        </ul>
    </nav>
  );
}
