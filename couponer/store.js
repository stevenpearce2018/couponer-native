import React from "react";
import { createStore } from 'redux';
import { Alert } from 'react-native';

import HomeScreen from './screens/HomeScreen';

const initialState = {
    email: null,
    loggedinKey: null,
    homePageNumber: 1,
    latitude: null,
    longitude: null,
    currentNav: <HomeScreen/>,
    navSelectedBools: {
      home: true,
      login: false,
      about: false,
      signup: false,
      search: false
    }
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'LOGIN':
        return {
          email: action.email
        };
      case 'SETLOCATION':
        return {
          longitude: action.longitude,
          latitude: action.latitude
        };
      case 'SETNAV':
        return {
          currentNav: action.nav,
          navSelectedBools: action.navSelectedBools
        };
      case 'LOGOUT':
        return {
          loggedinKey: null
        };
      case 'UPHOMEPAGE':
        return {
          homePageNumber: state.homePageNumber + 1
        };
      case 'DOWNHOMEPAGE':
        if (state.homePageNumber === 1) {
          Alert.alert(
          "Sorry",
          "You can't go under page 1.",
          [
            {text: 'OK'},
          ],
          { cancelable: false }
        )
        }
        else return {
          homePageNumber: state.homePageNumber - 1
        }
      default:
        return state;
    }
  }
  
const store = createStore(reducer);

export default store;
