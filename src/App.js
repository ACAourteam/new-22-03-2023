import { createUseStyles } from "react-jss";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Profile from "./components/Profile/Profile";
import { HOME, NOTFOUND, PROFILE, LOGIN, REGISTER } from "./constants/auth";
import { AuthProvider } from "./context/Context";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";

const useStyles = createUseStyles({
  app: {
    width: "100%",
    height: "100%",
  },
});
function App() {
  const styles = useStyles();
  return (
    <AuthProvider className={styles.app}>
      <Routes>
        <Route path={HOME} element={<Home />}></Route>
        <Route path={PROFILE} element={<Profile />}></Route>
        <Route path={REGISTER} element={<SignUp />}></Route>
        <Route path={LOGIN} element={<SignIn />}></Route>
        <Route path={NOTFOUND} element={<NotFound />}></Route>
      </Routes>
    </AuthProvider>
  );
}
export default App;
