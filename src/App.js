import React, { Component } from "react";
import About from "./components/about";
import Home from "./components/home";
// import Login from "./components/login";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  TouchableOpacity,
  Dimensions
} from "react-native";
import styles from "./styles";
import checkPasswordStrength from "./library/checkPasswordStrength";
import validateEmail from "./library/validateEmail";

const width = Dimensions.get("window").width; //full width

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      validPass: false,
      validEmail: false,
      passInputStyle: {
        marginBottom: 40,
        marginLeft: 20,
        height: 20,
        width: width - 100,
        borderBottomWidth: 2,
        borderBottomColor: "#fde428"
      },
      emailInputStyle: {
        marginLeft: 20,
        height: 20,
        width: width - 100,
        borderBottomWidth: 2,
        borderBottomColor: "#fde428"
      }
    };
  }

  login = () => alert("login");

  render() {
    return (
      <View>
        <Text style={styles.genericText}>Email</Text>
        <TextInput
          style={this.state.emailInputStyle}
          onChangeText={email =>
            this.setState({ email: email, validEmail: validateEmail(email) })
          }
          value={this.state.email}
        />
        <Text style={styles.genericText}>Password</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={password =>
            this.setState({
              password: password,
              validPass: checkPasswordStrength(password)
            })
          }
          value={this.state.password}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={
            this.state.validPass && this.state.validEmail
              ? styles.button
              : styles.buttonInvalid
          }
          onPress={this.login}
        >
          <Text style={styles.btnText}> Login </Text>
        </TouchableOpacity>
        <Text style={styles.hyperlinkText}>Forgot password?</Text>
      </View>
    );
  }
}
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text style={styles.text}>Signup</Text>
      </View>
    );
  }
}

const NavgationComponents = [<Home />, <About />, <Login />, <Signup />];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      geolocation: "",
      latitude: "",
      longitude: "",
      city: "",
      pageNumber: 1,
      coupons: <ActivityIndicator size="large" />,
      incrementPageClass: "hidden",
      drawerOpen: false,
      navigations: ["home", "about", "login", "signup"],
      navigationsIndex: 0,
      mainContent: <Home />
    };
    this.setNav = this.setNav.bind(this);
  }

  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  setNav = index =>
    this.setState({
      navigationsIndex: index,
      mainContent: NavgationComponents[index],
      drawerOpen: false
    });

  render() {
    return (
      <View style={!this.state.drawerOpen ? styles.app : styles.fadded}>
        <View style={styles.header}>
          <Text onPress={() => this.setNav(0)} style={styles.title}>
            Unlimited Couponer
          </Text>
          <Text onPress={this.toggleDrawer} style={styles.hamburger}>
            {!this.state.drawerOpen ? <Text>&#9776;</Text> : <Text>X</Text>}
          </Text>
        </View>
        <View style={this.state.drawerOpen ? styles.show : styles.hide}>
          <View style={styles.optionsHolder}>
            <Text
              onPress={() => this.setNav(0)}
              style={
                this.state.navigations[this.state.navigationsIndex] === "home"
                  ? styles.selectedOption
                  : styles.option
              }
            >
              Home
            </Text>
            <Text
              onPress={() => this.setNav(1)}
              style={
                this.state.navigations[this.state.navigationsIndex] === "about"
                  ? styles.selectedOption
                  : styles.option
              }
            >
              About
            </Text>
            <Text
              onPress={() => this.setNav(2)}
              style={
                this.state.navigations[this.state.navigationsIndex] === "login"
                  ? styles.selectedOption
                  : styles.option
              }
            >
              Login
            </Text>
            <Text
              onPress={() => this.setNav(3)}
              style={
                this.state.navigations[this.state.navigationsIndex] === "signup"
                  ? styles.selectedOption
                  : styles.option
              }
            >
              Signup
            </Text>
          </View>
        </View>
        <View>
          <Text style={styles.genericText}>Welcome, Guest.</Text>
          {this.state.mainContent}
        </View>
      </View>
    );
  }
}

export default App;
