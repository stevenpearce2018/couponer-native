import React from "react";
import capitalizeCase from "./capitalizeCase";
import uppcaseFirstWord from "./uppcaseFirstWord";
import HaversineInMiles from "./HaversineInMiles";
import postRequest from "./postRequest";
import { toast } from "react-toastify";
import { Text, View, TouchableOpacity } from "react-native";

const latitude = sessionStorage.getItem("couponlatitude");
const longitude = sessionStorage.getItem("couponlongitude");

// bubble values up to mycoupons component
const showCode = (code, showPopup, title) => showPopup(code, title);
const validateCode = (_id, showPopup, title) => showPopup(_id, title);

const getOrDiscardCoupons = async (_id, updateCouponsClaimed, flag) => {
  const loggedInKey = sessionStorage.getItem("UnlimitedCouponerKey")
    ? sessionStorage
        .getItem("UnlimitedCouponerKey")
        .replace('"', "")
        .replace('"', "")
    : null;
  const email = sessionStorage.getItem("UnlimitedCouponerEmail")
    ? sessionStorage.getItem("UnlimitedCouponerEmail")
    : null;
  if (!loggedInKey || !email) {
    toast.error("You are not logged in!");
    window.history.pushState(null, "", decodeURIComponent(`/Login`));
  } else {
    const data = {
      _id: _id,
      loggedInKey: loggedInKey,
      email: email
    };
    const response = await postRequest(
      flag === "discard" ? `/api/discardCoupon` : `/api/getCoupon`,
      data
    );
    if (
      response.response === "Coupon Claimed!" ||
      response.response === "Coupon Removed!"
    ) {
      toast.success(response.response);
      const couponsCurrentlyClaimed =
        flag === "discard"
          ? Number(sessionStorage.getItem("couponsCurrentlyClaimed")) - 1
          : Number(sessionStorage.getItem("couponsCurrentlyClaimed")) + 1;
      sessionStorage.setItem(
        "couponsCurrentlyClaimed",
        couponsCurrentlyClaimed
      );
      flag === "discard" ? updateCouponsClaimed(-1) : updateCouponsClaimed(1);
    } else toast.error(response.response);
  }
};

const CouponsMaker = (props, updateCouponsClaimed, showPopup) => {
  try {
    const content = props.map(coupons => (
      <View id={coupons._id}>
        <Text>{capitalizeCase(coupons.title)}</Text>
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
              {HaversineInMiles(
                latitude,
                longitude,
                coupons.latitude,
                coupons.longitude
              )}
            </Text>
            {window.location.href
              .substring(
                window.location.href.lastIndexOf("/") + 1,
                window.location.href.length
              )
              .toLowerCase() === "mycoupons" &&
            sessionStorage.getItem("UnlimitedCouponerKey").substr(-1) ===
              "c" ? (
              <TouchableOpacity
                onPress={() =>
                  getOrDiscardCoupons(
                    coupons._id,
                    updateCouponsClaimed,
                    "discard"
                  )
                }
              >
                <strong> Discard Coupon </strong>
              </TouchableOpacity>
            ) : (
              <View />
            )}
            {window.location.href
              .substring(
                window.location.href.lastIndexOf("/") + 1,
                window.location.href.length
              )
              .toLowerCase() === "mycoupons" &&
            sessionStorage.getItem("UnlimitedCouponerKey").substr(-1) ===
              "b" ? (
              <TouchableOpacity
                onPress={() =>
                  validateCode(coupons._id, showPopup, coupons.title)
                }
              >
                <strong> Validate Customer Codes </strong>
              </TouchableOpacity>
            ) : window.location.href
                .substring(
                  window.location.href.lastIndexOf("/") + 1,
                  window.location.href.length
                )
                .toLowerCase() === "mycoupons" &&
              sessionStorage.getItem("UnlimitedCouponerKey").substr(-1) ===
                "c" ? (
              <TouchableOpacity
                onPress={() =>
                  showCode(coupons.couponCodes[0], showPopup, coupons.title)
                }
              >
                <strong> Show Your Coupon Code </strong>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  getOrDiscardCoupons(coupons._id, updateCouponsClaimed, "get")
                }
              >
                <strong> Get Coupon </strong>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    ));
    return <View>{content}</View>;
  } catch (error) {
    return (
      <View>
        {window.location.href
          .substring(
            window.location.href.lastIndexOf("/") + 1,
            window.location.href.lastIndexOf("/") + 7
          )
          .toLowerCase() === "search" ? (
          <Text>Didn't find any coupons with these parameters.</Text>
        ) : (
          <Text>
            Unable to automatically search for coupons. Try searching manually.
          </Text>
        )}
      </View>
    );
  }
};

export default CouponsMaker;
