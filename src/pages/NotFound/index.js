import { Link } from "react-router-dom";
import  "./NotFound.scss";

export function NotFound() {
  return (
    <div className="not-found">

      <h1> 404 ERROR | Page not found - reverse and check out our <Link to="landing">Home Page</Link>! </h1>
    </div>
  );
}
