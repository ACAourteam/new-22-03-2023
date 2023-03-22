import { Button } from "@mui/material";
import { getDownloadURL, listAll } from "firebase/storage";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { auth, imageListRef, usersRef } from "../../firebase";
import { useAuth } from "../../context/Context";
import { getDocs } from "firebase/firestore";
const avatars = [];
const users = [];

function Profile() {
  const [avatar, setAvatar] = useState(null);
  const [logedUser, setLogedUser] = useState(null);
  const [googleUser, setGoogleUser] = useState(null);
  const logUser = auth.currentUser;

  const navigate = useNavigate();
  const { user, logout } = useAuth();

  useEffect(() => {
    setGoogleUser(user);

    async function f() {
      const snapshot = await getDocs(usersRef);
      snapshot.forEach((doc) => users.push({ ...doc.data(), id: doc.id }));
      const result = users.find((elem) => elem.email == user?.email);
      setLogedUser(result);
      const response = await listAll(imageListRef);
      response.items.forEach((item) => {
        getDownloadURL(item)
          .then((url) => {
            avatars.push(url);
            return avatars;
          })
          .then((avatars) => {
            setAvatar(
              avatars.find((item) => item.includes(result?.avatarName))
            );
          });
      });
    }
    f();
  }, [user]);

  const logOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };
  console.log("logUser", logUser);
  console.log("user", user);

  {
    if (logUser) {
      return (
        <div>
          <p>
            {logedUser?.name} {logedUser?.surname} {googleUser?.displayName}
          </p>
          <img
            src={avatar || googleUser?.photoURL}
            style={{ width: "100px", height: "100px" }}
          />

          <Button onClick={logOut}>Sign Out</Button>
        </div>
      );
    }
    return <Navigate to="/login" />;
  }
}
export default Profile;
