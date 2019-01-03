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
      validPhone: false,
      validPhoneState: false,
      role: " Customer",
      passInputStyle: {
        marginBottom: 30,
        marginLeft: 20,
        height: 20,
        width: width - 40,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
      },
      emailInputStyle: {
        marginLeft: 20,
        marginBottom: 40,
        height: 20,
        width: width - 40,
        borderBottomWidth: 2,
        borderBottomColor: "lightgrey"
      },
      buisnessName: "",
      subscriptionLength: "",
      phoneNumber: ""
    };
    this.login = this.login.bind(this);
    this.validatePhone = this.validatePhone.bind(this);
  }
  
  static navigationOptions = {
    header: null,
  };

  login = () => {
    if (!this.state.validEmail && !this.state.validPass) return alert("You need a valid email and password to signup!")
    else if (!this.state.validEmail) return alert("You need a valid email to signup!")
    else if (!this.state.validPass) return alert("You need a valid password to signup!")
  }

  validatePhone = () => {
    if (!this.state.validPhoneState) return alert("You need to enter a valid phone number!");
  }

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
              : styles.buttonUnfocused
          }
          onPress={this.setCustomer}
        >
          <Text style={styles.text}> Customer </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={
            this.state.role === " Buisness Owner"
              ? styles.button
              : styles.buttonUnfocused
          }
          onPress={this.setBuisnessOwner}
        >
          <Text style={styles.text}> Buisness Owner </Text>
        </TouchableOpacity>
        <Text style={styles.genericText}>Email</Text>
        <Text style={this.state.validEmail ? styles.validCheck : styles.invalidX}>{this.state.validEmail ? <Text>&#10003;</Text> : <Text>&#x2718;</Text>}</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={email =>
            this.setState({ email: email, validEmail: validateEmail(email) })
          }
          value={this.state.email}
        />
        <Text style={styles.genericText}>Password</Text>
        <Text style={this.state.validPass ? styles.validCheck : styles.invalidX}>{this.state.validEmail ? <Text>&#10003;</Text> : <Text>&#x2718;</Text>}</Text>
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
        <Text style={this.state.validPass ? styles.validCheck : styles.invalidX}>{this.state.validPass ? <Text>&#10003;</Text> : <Text>&#x2718;</Text>}</Text>
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
        <Text style={this.state.validPhoneState && !this.state.validPhone ? styles.validCheck : styles.invalidX}>{this.state.validPhoneState && !this.state.validPhone ? <Text>&#10003;</Text> : <Text>&#x2718;</Text>}</Text>
        <TextInput
          style={this.state.emailInputStyle}
          onChangeText={phoneNumber =>
            this.setState({
                phoneNumber: phoneNumber,
            })
          }
          value={this.state.phoneNumber}
        />
        <TouchableOpacity
          style={
            this.state.validPhoneState && !this.state.validPhone ?
              styles.button :
            this.state.validPhone && this.state.validPass && this.state.validEmail && this.state.validPhoneState
              ? styles.button
              : styles.buttonInvalid
          }
          onPress={this.state.validPhone ? this.login : this.validatePhone}
        >
        <Text style={styles.text}>{this.state.validPhone ? "Signup" : "Validate Phone Number"} </Text>
        </TouchableOpacity>
        <Text style={styles.hyperlinkText}>Forgot password?</Text>
        </ScrollView>
      </View>
    );
  }
}
