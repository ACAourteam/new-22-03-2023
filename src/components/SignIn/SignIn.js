import { Button, TextField } from "@mui/material";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSignInStyles } from "./SignIn.styles";
import { useAuth } from "../../context/Context";
import GoogleAuth from "../GoogleAuth/GoogleAuth";
import { auth } from "../../firebase";

function SignIn() {
  const styles = useSignInStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const logUser = auth.currentUser;

  const onLoginClick = () => {
    signIn(email, password)
      .then(() => {
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  {
    if (logUser) {
      return <Navigate to="/profile" />;
    }
    return (
      <div className={styles.parent}>
        <div className={styles.left}>
          <div>
            <h1 className={styles.h1}>Website Name</h1>
            <h3 className={styles.h3}>Description</h3>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.formDiv}>
            <div className={styles.form}>
              <span>
                <TextField
                  required
                  label="Email"
                  variant="outlined"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </span>
              <span>
                <TextField
                  required
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </span>
              <span>
                <Button variant="contained" onClick={onLoginClick}>
                  Sign In
                </Button>
              </span>
              <GoogleAuth />
            </div>
            <Button variant="outlined">
              <NavLink to="/register" style={{ textDecoration: "none" }}>
                Register
              </NavLink>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
export default SignIn;
