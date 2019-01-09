import React from "react";
import styles from "../styles";
import { Text, View , ScrollView} from "react-native";
import { connect } from 'react-redux';

class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Text style={styles.genericHeader}>What we do {this.props.count}</Text>
          <Text style={styles.genericText}>
          UnlimitedCouponer is meant to be a buisness and consumer friendly way of
          connecting customers with unique products and experiences.
          UnlimitedCouponer is cheap for both parties, costing only 5$ a month for
          unlimited coupons as a consumer and 0.50$ per coupon posted as a
          buisness. UnlimitedCouponer is the perfect way to make more money for
          your buisness through promotions or find great deals on places a
          consumer may have never heard of. Sign up today, and find great deals in
          a city near you.
          </Text>
          <Text style={styles.genericHeader}>Why choose us?</Text>
          <Text style={styles.genericText}>
          If you are a consumer you can find new and interesting events or foods
          that you may have never knew existed otherwise. As a consumer you can
          use UnlimitedCouponer to save money on activities that you would have
          done regardless, it pays for itself! If you are a buisness owner you can
          use UnlimitedCouponer to advertise your buisness and make money at the
          same time, other coupon websites take a large percentage of each sale.
          We believe that is not only anti-entrepreneur, but these aggressive
          margins can often times drive away up and coming small businesses.
          </Text>
          <Text style={styles.genericHeader}>Contact us</Text>
          <Text style={styles.genericText}>
          Found a bug, have a general question, want to make a sugguestion? Email
          us at UnlimitedCouponer@gmail.com.
          </Text>
          </ScrollView>
      </View>
    );
  }
};



const mapStateToProps = state => ({ count: state.count })

export default connect(mapStateToProps)(AboutScreen);
