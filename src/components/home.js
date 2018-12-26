import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  TextInput,
  ActivityIndicator
} from "react-native";
import styles from "../styles";
import CouponsMaker from "../library/couponsMaker";

const width = Dimensions.get("window").width; //full width

class Home extends Component {
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
  async componentDidMount() {
    const url =
      "https://whispering-beach-41759.herokuapp.com/search?pageNumber=1&city=roslindale";
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, same-origin, *omit
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    });
    const data = await response.json();
    alert(data);
    if (
      data.coupons !== "No coupons were found near you. Try searching manually"
    )
      this.setState({
        coupons: CouponsMaker(data.coupons, that.props.updateCouponsClaimed),
        incrementPageClass: "center"
      });
    else
      this.setState({
        coupons: (
          <View>
            <Text>No coupons found near you, try searching manually.</Text>
          </View>
        )
      });
  }

  render() {
    return (
      <View>
        <Text style={styles.text}>Coupons near you</Text>
        {this.state.coupons}
      </View>
    );
  }
}

export default Home;
