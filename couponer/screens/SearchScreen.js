import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import styles from "../styles";
import { connect } from 'react-redux';

const width = Dimensions.get("window").width; //full width

class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      zip: "",
      keywords: "",
      passInputStyle: {
        marginBottom: 40,
        marginRight: 20,
        marginLeft: 20,
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

  login = () => alert("login");

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topPadding}></View>
        <Text style={styles.genericText}>City</Text>
        <TextInput
          style={this.state.emailInputStyle}
          onChangeText={city =>
            this.setState({ city: city })
          }
          value={this.state.email}
        />
        <Text style={styles.genericText}>Zip</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={zip =>
            this.setState({
              zip: zip,
            })
          }
          value={this.state.zip}
        />
        <Text style={styles.genericText}>Keywords</Text>
        <TextInput
          style={this.state.passInputStyle}
          onChangeText={keywords =>
            this.setState({
              keywords: keywords,
            })
          }
          value={this.state.keywords}
        />
        <TouchableOpacity
          style={
            this.state.keywords || this.state.zip || this.state.city
              ? styles.button
              : styles.buttonInvalid
          }
          onPress={this.login}
        >
          <Text style={styles.text}> Search </Text>
        </TouchableOpacity>
        <Text style={styles.hyperlinkText}>Forgot password?</Text>
      </View>
    );
  }
}


const mapStateToProps = state => ({ count: state.count })

export default connect(mapStateToProps)(SearchScreen);