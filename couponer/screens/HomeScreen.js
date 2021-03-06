import React from 'react';
import {
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  Image,
  Dimensions,
  TouchableOpacity,
  Platform
} from 'react-native';
import styles from "../styles";
import { connect } from 'react-redux';
import Geolocation from 'react-native-geolocation-service';
import { Constants, Location, Permissions } from 'expo';

// import CouponsMaker from "../library/couponsMaker";
const width = Dimensions.get("window").width; //full width

const CouponsMaker = props => {
  try {
    const content = props.map((coupons, i) => (
      <View key={i}>
        <Text>_id: {coupons._id}</Text>
        <Text>title: {coupons.title}</Text>
        <Image
          style={{width: width, height: 200}}
          source={{uri: coupons.base64image}}
        />
        <Text>Was: {(coupons.currentPrice - 0).toFixed(2)}$</Text>
        <Text>Now: {(coupons.discountedPrice - 0).toFixed(2)}$</Text>
        <Text>Only {coupons.amountCoupons} Coupons Left!</Text>
        <Text>{coupons.textarea}</Text>
        <Text>
              {coupons.address}, {coupons.city}
        </Text>
        <Text>
          {(
            ((coupons.currentPrice - coupons.discountedPrice) /
              coupons.currentPrice) *
              100
            ).toFixed(2)
            }
          % Percent Off!
        </Text>
        <Text>
          {
            "latitude: " +
            coupons.latitude +
            " longitude: " +
            coupons.longitude
          }
        </Text>
        <TouchableOpacity
          onPress={() => alert("get coupon")
          }
        >
          <Text> Get Coupon </Text>
        </TouchableOpacity>
      </View>
    ));
    return <View>{content}</View>;
  } catch (error) {
    return (
      <View>
          <Text>
          {JSON.stringify(error)}
          </Text>
      </View>
    );
  }
};

// Same schema that would be gotten from database

const couponData = [
  {
    title: "title 1",
    _id: "_id",
    base64image: "data:image/png;base64,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",
    currentPrice: 1.00,
    discountedPrice: 0.50,
    amountCoupons: 100,
    textarea: "textarea",
    address: "1325 boylston street",
    latitude: 696969,
    longitude: 911911911,
    
  },
    {
    title: "title 2",
    _id: "_id",
    base64image: "data:image/png;base64,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",
    currentPrice: 1.00,
    discountedPrice: 0.50,
    amountCoupons: 100,
    textarea: "textarea",
    address: "1325 boylston street",
    latitude: 696969,
    longitude: 911911911,
  }
]

let couponData2 = JSON.parse(JSON.stringify(couponData));
couponData2[0].title = "title 3"
couponData2[1].title = "title 4"

class HomeScreen extends React.Component {
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
      location: null,
      errorMessage: null,
    };
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
  }
  static navigationOptions = {
    header: null,
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  
  componentDidMount = () => {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
      // Geolocation.getCurrentPosition(
      //     position => {
      //         this.props.dispatch({ type: 'SETLOCATION', latitude: position.latitude, longitude: position.longitude});
      //     },
      //     error => {
      //         // See error code charts below.
      //         alert(error.code, error.message);
      //     },
      //     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      // );
    // if (!this.props.latitude && !this.props.latitude && navigator.geolocation) navigator.geolocation.getCurrentPosition(gotPosition);
    // function gotPosition(position) {
    //   this.props.dispatch({ type: 'SETLOCATION', latitude: position.latitude, longitude: position.longitude});
    // }
    this.setState({coupons: CouponsMaker(couponData)})
  } 

  next = () => this.setState({coupons: CouponsMaker(couponData2)})

  back = () => this.setState({coupons: CouponsMaker(couponData)})

  increment = () => this.props.dispatch({ type: 'UPHOMEPAGE' });

  decrement = () => this.props.dispatch({ type: 'DOWNHOMEPAGE' });

  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.homeheader}>Coupons Near You</Text>
            {/* <Text style={styles.homeheader}>Page {this.props.homePageNumber}</Text>
            <Text style={styles.homeheader}>latitude: {this.props.latitude}</Text>
            <Text style={styles.homeheader}>longitude: {this.props.longitude}</Text>
            <Text style={styles.homeheader}>{text}</Text> */}
            <View style={styles.contentContainer}>{this.state.coupons}</View>

        <TouchableOpacity
          onPress={this.back
          }
        >
          <Text> Back </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.next
          }
        >
          <Text> Next </Text>
          <View style={styles.arrowContainer}>
          <TouchableOpacity
          onPress={this.decrement
          }
        >
          <Text style={styles.arrow}>&#8678;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.increment
          }
        >
          <Text style={styles.arrow}>&#8680;</Text>
        </TouchableOpacity>
        </View>
        </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}


const mapStateToProps = state => ({ homePageNumber: state.homePageNumber, email: state.email, loggedinKey: state.loggedinKey, latitude: state.latitude, longitude: state.longitude })

export default connect(mapStateToProps)(HomeScreen);
