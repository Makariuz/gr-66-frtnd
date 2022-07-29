import { Login, Signup } from "components";
import { AuthContext } from "context";
import './loginSignUp.scss'
import { useContext, useState } from "react";

import {BsToggle2Off, BsToggle2On} from 'react-icons/bs'

export function LoginSignUp() {
  const { user } = useContext(AuthContext);

  const [showLogin, setShowLogin] = useState(true)

  return (
    <div className="forms-container">
      
      {showLogin ?
      <>
        <BsToggle2Off size="42" onClick={() => setShowLogin(!showLogin)}/>
        <Login />
        </>
      :
      <>
      <BsToggle2On size="42" onClick={() => setShowLogin(!showLogin)}/>
      <Signup />
      </>
      }
  
   
    </div>
  );
}


