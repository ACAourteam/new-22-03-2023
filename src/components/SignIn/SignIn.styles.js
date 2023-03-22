import { createUseStyles } from "react-jss";

export const useSignInStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    textAlign: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  left: {
    position: "relative",
    "& div": {
      position: "absolute",
      top: "30%",
    },
  },
  h1: {
    color: "#23A8F2",
  },
  h3: {
    color: "white",
  },

  right: {
    position: "relative",
  },
  formDiv: {
    width: "300px",
    height: "400px",
    position: "absolute",
    top: "20%",
    right: "0px",
    color: "black",
    background: "white",
    borderRadius: "12px",
  },
  form: {
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    "& span": {
      padding: "10px",
    },
  },
});
