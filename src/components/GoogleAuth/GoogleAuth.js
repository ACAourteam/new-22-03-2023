import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../../firebase";
import GoogleButton from "react-google-button";

function GoogleAuth() {
  let navigate = useNavigate();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem = ("isAuth", true);
      navigate("/profile");
    });
  };
  return (
    <GoogleButton onClick={signInWithGoogle}>Sign With Google</GoogleButton>
  );
}

export default GoogleAuth;
