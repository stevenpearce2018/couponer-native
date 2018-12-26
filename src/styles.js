import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width

const styles = StyleSheet.create({
  header: {
    padding: 20,
    maxWidth: width,
    background: "#fde428",
    flexDirection: "row"
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "0em",
    textAlign: "left",
    color: "#002e5b"
  },
  hamburger: {
    paddingLeft: width - 287,
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "0em",
    textAlign: "right",
    color: "#002e5b"
  },
  menu: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "0em",
    color: "#002e5b"
  },
  show: {
    padding: 20,
    maxWidth: width,
    background: "#002e5b",
    borderBottomColor: "#fde428",
    borderBottomWidth: 5,
    borderRightColor: "#fde428",
    borderRightWidth: 5,
    color: "#fde428",
    flexDirection: "row",
    marginBottom: "1em"
  },
  buttonInvalid: {
    alignItems: "center",
    backgroundColor: "#ff9999",
    marginRight: 78,
    marginLeft: 20,
    padding: 10,
    marginBottom: "2em"
  },
  button: {
    alignItems: "center",
    backgroundColor: "green",
    marginRight: 78,
    marginLeft: 20,
    padding: 10,
    marginBottom: "2em"
  },
  hide: {
    display: "none"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginVertical: "1em",
    textAlign: "center",
    color: "#002e5b"
  },
  genericText: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginVertical: "1em",
    textAlign: "left",
    marginLeft: 20,
    color: "#002e5b"
  },
  hyperlinkText: {
    color: "#1B95E0",
    textAlign: "center",
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginRight: 40
  }
});

export default styles;
