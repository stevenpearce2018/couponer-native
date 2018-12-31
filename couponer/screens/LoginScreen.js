import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "../styles";
import checkPasswordStrength from "../library/checkPasswordStrength";
import validateEmail from "../library/validateEmail";

const width = Dimensions.get("window").width; //full width

export default class LoginScreen extends Component {
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
  
  static navigationOptions = {
    header: null,
  };

  login = () => alert("login");

  render() {
    return (
      <View style={styles.container}>
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
          <Text style={styles.text}> Login </Text>
        </TouchableOpacity>
        <Text style={styles.hyperlinkText}>Forgot password?</Text>
      </View>
    );
  }
}
