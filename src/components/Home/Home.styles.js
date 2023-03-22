import { createUseStyles } from "react-jss";

export const useHomeStyles = createUseStyles({
  parent: {
    width: "100%",
    height: "100%",
    background: "#333333",
    color: "white",
    display: "grid",
    gridTemplateRows: "7fr 1fr",
  },
  top: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gridColumnGap: "100px",
  },
  left: {
    textAlign: "center",
    display: "grid",
    gridTemplateRows: "3fr 2fr 1fr 5fr 5fr",
  },
  types: {
    "& span": {
      display: "inline-block",
      width: "250px",
      height: "50px",
      fontSize: "30px",
      background: "#519A98",
      borderRadius: "5px",
    },
  },
  search: {
    background: "white",
    marginTop: "20px",
    width: "300px",
  },
  type: {
    display: "grid",
    color: "#519A98",
    fontWeight: "900",
  },

  description: {
    color: "#9F95EC",
    fontFamily: "verdana",
  },
  right: {
    display: "grid",
    gridTemplateRows: "1fr 5fr",
    textAlign: "center",
  },

  register: {
    background: "white",
    marginLeft: "50px",
  },
  tasks: {
    display: "grid",
    gridTemplateRows: "1fr 5fr 1fr",
  },
  label: {
    "& span": {
      display: "inline-block",
      width: "250px",
      height: "50px",
      fontSize: "30px",
      background: "#519A98",
      borderRadius: "5px",
    },
  },
  tasksExamples: {
    display: "grid",
    borderRadius: "50px",
  },
  example: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  taskImage: {
    width: "80px",
    height: "80px",
    background: "#519A98",
    borderRadius: "50%",
    marginRight: "50px",
  },
  open: {
    position: "relative",
    "& span": {
      position: "absolute",
      bottom: "15px",
      right: "5px",
    },
  },

  bottom: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  downArrowIcon: {
    width: "30px",
    height: "30px",
  },
});
