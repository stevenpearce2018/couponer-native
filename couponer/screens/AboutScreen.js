import React from "react";
import styles from "../styles";
import { Text, View , ScrollView} from "react-native";

const subHeader = props => <View><Text style={styles.genericHeader}>{props.genericHeader}</Text><Text style={styles.genericText}>{props.genericText}</Text></View>

export default class AboutScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.container}>
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            {subHeader({genericHeader: "What we do ", genericText: "UnlimitedCouponer is meant to be a buisness and consumer friendly way of connecting customers with unique products and experiences. UnlimitedCouponer is the perfect way to make more money for your buisness through promotions or find great deals on places a consumer may have never heard of. Sign up today, and find great deals in a city near you."})}
            {subHeader({genericHeader: "Why choose us?", genericText: "If you are a consumer you can find new and interesting events or foods that you may have never knew existed otherwise. As a consumer you can use UnlimitedCouponer to save money on activities that you would have done regardless, all for free! If you are a buisness owner you can use UnlimitedCouponer to advertise your buisness and make money at the same time, other coupon websites take a large percentage of each sale. We believe that is not only anti-entrepreneur, but these aggressive margins can often times drive away up and coming small businesses."})}
            {subHeader({genericHeader: "Contact us", genericText: "Found a bug, have a general question, want to make a sugguestion? Email us at UnlimitedCouponer@gmail.com."})}
          </ScrollView>
      </View>
    );
  }
};
