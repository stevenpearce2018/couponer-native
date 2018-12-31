import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import styles from "../styles";
import checkPasswordStrength from "../library/checkPasswordStrength";
import validateEmail from "../library/validateEmail";

const width = Dimensions.get("window").width; //full width

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      validPass: false,
      validEmail: false,
      role: " Customer",
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
      },
      buisnessName: "",
      subscriptionLength: "",
      phoneNumber: ""
    };
  }
  
  static navigationOptions = {
    header: null,
  };

  login = () => alert("login");
  
  setCustomer = () => this.setState({role: " Customer"})
  
  setBuisnessOwner = () => this.setState({role: " Buisness Owner"})

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <TouchableOpacity
          style={
              this.state.role === " Customer"
              ? styles.button
              : styles.buttonInvalid
          }
          onPress={this.setCustomer}
        >
          <Text style={styles.text}> Customer </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            this.state.role === " Buisness Owner"
              ? styles.button
              : styles.buttonInvalid
          }
          onPress={this.setBuisnessOwner}
        >
          <Text style={styles.text}> Buisness Owner </Text>
        </TouchableOpacity>
        <Text style={styles.genericText}>Email</Text>
        <TextInput
          style={this.state.passInputStyle}
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
              validPass: (checkPasswordStrength(password) && password === this.state.confirmPassword)
            })
          }
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.genericText}>Confirm Password</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={confirmPassword =>
            this.setState({
              confirmPassword: confirmPassword,
              validPass: (checkPasswordStrength(confirmPassword) && this.state.password === confirmPassword)
            })
          }
          value={this.state.confirmPassword}
          secureTextEntry={true}
        />
        <Text style={styles.genericText}>City</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={city =>
            this.setState({
              city: city,
            })
          }
          value={this.state.city}
        />
        <Text style={styles.genericText}> {this.state.role === " Customer" ? "Subcription Length" : "Buisness Name"} </Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={value =>
            this.state.role === " Customer" ?
            this.setState({
                subscriptionLength: value,
            }) : 
            this.setState({
                buisnessName: value,
            })
          }
          value={this.state.role === " Customer" ? this.state.subscriptionLength : this.state.buisnessName}
        />
        <Text style={styles.genericText}>Phone Number</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={phoneNumber =>
            this.setState({
                phoneNumber: phoneNumber,
            })
          }
          value={this.state.phoneNumber}
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
        </ScrollView>
      </View>
    );
  }
}
