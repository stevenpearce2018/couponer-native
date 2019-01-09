import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  AsyncStorage
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
        marginRight: 20,
        height: 20,
        width: width - 40,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
      },
      emailInputStyle: {
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 40,
        height: 20,
        width: width - 40,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
      }
    };
  }

  static navigationOptions = {
    header: null,
  };

  login = async () => {
    try {
      await AsyncStorage.setItem('loggedinKey', 'adasasdasdasdasd');
    } catch (error) {
      // Error saving data
    }
  }

  render() {
    return (
      <View style={styles.container}>
      <View style={styles.topPadding}></View>
        <Text style={styles.genericText}>Email</Text>
        <Text style={this.state.validEmail ? styles.validCheck : styles.invalidX}>{this.state.validEmail ? <Text>&#10003;</Text> : <Text>&#x2718;</Text>}</Text>
        <TextInput
          style={this.state.emailInputStyle}
          onChangeText={email =>
            this.setState({ email: email, validEmail: validateEmail(email) })
          }
          value={this.state.email}
        />
        <Text style={styles.genericText}>Password</Text>
        <Text style={this.state.validPass ? styles.validCheck : styles.invalidX}>{this.state.validPass ? <Text>&#10003;</Text> : <Text>&#x2718;</Text>}</Text>
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
        <Text style={styles.hyperlinkText} onPress={this.test}>Forgot password?</Text>
      </View>
    );
  }
}
