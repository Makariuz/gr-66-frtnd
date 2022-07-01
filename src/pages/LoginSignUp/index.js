import { Login, Signup } from "components";
import { AuthContext } from "context";
import { useContext } from "react";

export function LoginSignUp() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1>Login / Signup</h1>
      <Login />
      <Signup />
    </div>
  );
}
