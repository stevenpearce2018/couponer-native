import { StyleSheet, Dimensions } from "react-native";
const width = Dimensions.get("window").width; //full width

const styles = StyleSheet.create({
  header: {
    padding: 20,
    maxWidth: width,
    backgroundColor: "#fde428",
    flexDirection: "row"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: "bold",
    // fontSize: 1.5,
    // marginVertical: 0,
    textAlign: "left",
    color: "#002e5b"
  },
  hamburger: {
    paddingLeft: width - 287,
    fontWeight: "bold",
    fontSize: 1.5,
    marginVertical: 0,
    textAlign: "right",
    color: "#002e5b"
  },
  menu: {
    textAlign: "right",
    fontWeight: "bold",
    fontSize: 1.5,
    marginVertical: 0,
    color: "#002e5b"
  },
  show: {
    padding: 20,
    maxWidth: width,
    backgroundColor: "#002e5b",
    borderBottomColor: "#fde428",
    borderBottomWidth: 5,
    borderRightColor: "#fde428",
    borderRightWidth: 5,
    color: "#fde428",
    flexDirection: "row",
    marginBottom: 1
  },
  buttonInvalid: {
    alignItems: "center",
    backgroundColor: "lightgrey",
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  buttonUnfocused: {
    alignItems: "center",
    backgroundColor: "#ffffcc",
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    marginBottom: 20,
    borderColor: "#fde428",
    borderWidth: 2,
    borderRadius: 20,
  },
  topPadding: {
    padding: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#fde428",
    marginRight: 20,
    marginLeft: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 20,
  },
  hide: {
    display: "none"
  },
  contentContainer: {
    paddingTop: 30,
  },
  text: {
    // lineHeight: 1.5,
    // fontSize: 1.125,
    fontWeight: "bold",
    marginVertical: 1,
    textAlign: "center",
    color: "#002e5b"
  },
  inlineText: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  genericHeader: {
    // lineHeight: 1.5, 
    // fontSize: "1rem",
    fontWeight: "bold",
    marginVertical: 1,
    textAlign: "left",
    marginLeft: 20,
    color: "#002e5b"
  },
  invalidX: {
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 20,
    marginTop: -40,
    marginBottom: 20,
    color: "red"
  },
  validCheck: {
    fontWeight: "bold",
    textAlign: "right",
    marginRight: 20,
    marginTop: -40,
    marginBottom: 20,
    color: "green"
  },
  homeheader: {
    paddingTop: 10,
    fontWeight: "bold",
    marginVertical: 1,
    textAlign: "center",
    color: "#002e5b"
  },
  genericText: {
    // lineHeight: 1.5,
    // fontSize: 1.125,
    marginBottom: 20,
    fontWeight: "bold",
    marginVertical: 1,
    textAlign: "left",
    marginLeft: 20,  
    color: "#002e5b"
  },
  hyperlinkText: {
    color: "#1B95E0",
    textAlign: "center",
    // fontSize: 1.125,
    fontWeight: "bold",
  }
});

export default styles;
