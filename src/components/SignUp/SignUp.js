import { v4 as uuidv4 } from "uuid";
import { Button, TextField } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { useEffect, useMemo, useRef, useState } from "react";
import { auth, storage, usersRef } from "../../firebase";
import { useSignUpStyles } from "./SignUp.style";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Context";

function SignUp() {
  const styles = useSignUpStyles();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const inputRef = useRef();
  const [firstTime, setFirstTime] = useState(true);
  const [secondTime, setSecondTime] = useState(false);
  const navigate = useNavigate();
  const { createUser, logout } = useAuth();
  const logUser = auth.currentUser;

  const uuid = useMemo(() => {
    return uuidv4();
  }, []);

  useEffect(() => {
    if (firstTime) {
      return;
    }
    const imageRef = ref(storage, `avatars/${imageUpload.name + uuid}`);
    uploadBytes(imageRef, imageUpload);
  }, [secondTime]);

  const onAddAvatarChange = (e) => {
    setImageUpload(e.target.files[0]);
    setSecondTime(true);
    setFirstTime(false);
  };

  const downloadImage = () => {
    inputRef.current.click();
  };

  const onRegisterClick = () => {
    const user = {
      email,
      password,
      name,
      surname,
      avatarName: `${imageUpload.name}${uuid}`,
    };
    addDoc(usersRef, user);
    createUser(email, password)
      .then(() => {
        logout();
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
        <div className={styles.form}>
          <span>
            <TextField
              required
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </span>
          <span>
            <TextField
              required
              label="Surname"
              variant="outlined"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />
          </span>
          <span>
            <TextField
              required
              label="Email"
              variant="outlined"
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
            <Button variant="contained" onClick={downloadImage}>
              Add Avatar
            </Button>
            <input
              accept="image/*"
              type="file"
              onChange={onAddAvatarChange}
              style={{ display: "none" }}
              ref={inputRef}
            />
          </span>
          <span>
            <Button variant="contained" onClick={onRegisterClick}>
              Sign Up
            </Button>
          </span>
          <NavLink to="/login">Sign In</NavLink>
        </div>
      </div>
    );
  }
}
export default SignUp;
