import { Login, Signup } from "components";
import { AuthContext } from "context";

import './Landing.scss'
import { LoginSignUp } from "pages/LoginSignUp";
import { useContext, useState } from "react";
import logo from '../../assets/7.PNG'
import { About } from "pages/About";

export function Landing() {
  const { user } = useContext(AuthContext);

  const [hideLogin, setHideLogin] = useState(false)


  return (
    <div className="landing-container">
<About />
     
   
    </div>
  );
}
