import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator
} from 'react-native';
import styles from "../styles";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      geolocation: "",
      latitude: "",
      longitude: "",
      city: "",
      pageNumber: 1,
      coupons: <ActivityIndicator size="large" />,
      incrementPageClass: "hidden"
    };
  }
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.homeheader}>Coupons Near You</Text>
            <View style={styles.contentContainer}>{this.state.coupons}</View>
        </ScrollView>
      </View>
    );
  }
}
