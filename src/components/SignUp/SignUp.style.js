import { createUseStyles } from "react-jss";

export const useSignUpStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    textAlign: "center",
    position: "relative",
  },
  form: {
    width: "400px",
    height: "520px",
    position: "absolute",
    top: "20%",
    right: 0,
    left: 0,
    margin: "auto",
    padding: "30px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    borderRadius: "12px",
    "& span": {
      padding: "10px",
    },
  },
});
