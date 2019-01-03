import React from "react";
import capitalizeCase from "./capitalizeCase";
import uppcaseFirstWord from "./uppcaseFirstWord";
// import HaversineInMiles from "./HaversineInMiles";
// import postRequest from "./postRequest";
// import { toast } from "react-toastify";
import { Text, View, TouchableOpacity } from "react-native";

const CouponsMaker = (props) => {
  try {
    const content = props.map(coupons => (
      <View>
        <Text>_id: {coupons._id} title: {capitalizeCase(coupons.title)}</Text>
        <Image
          src={coupons.base64image}
          alt="Example showing how your custom upload will appear on the coupon"
        />
        <View>
          <View>
            <Text>Was: {(coupons.currentPrice - 0).toFixed(2)}$</Text>
          </View>
          <View>
            <Text>
              {(
                ((coupons.currentPrice - coupons.discountedPrice) /
                  coupons.currentPrice) *
                100
              ).toFixed(2)}
              % Percent Off!
            </Text>
          </View>

          <View>Now: {(coupons.discountedPrice - 0).toFixed(2)}$</View>
          <View>
            Save: {(coupons.currentPrice - coupons.discountedPrice).toFixed(2)}$
          </View>
          <View>Only {coupons.amountCoupons} Coupons Left!</View>
          <View>
            <Text>{uppcaseFirstWord(coupons.textarea)}</Text>
            <Text>
              {capitalizeCase(coupons.address)}, {capitalizeCase(coupons.city)}
            </Text>
            <Text>
              {
                "latitude: " +
                coupons.latitude +
                "longitude: " +
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
        </View>
      </View>
    ));
    return <View>{content}</View>;
  } catch (error) {
    return (
      <View>
          <Text>
            Unable to automatically search for coupons. Try searching manually.
          </Text>
      </View>
    );
  }
};

export default CouponsMaker;
