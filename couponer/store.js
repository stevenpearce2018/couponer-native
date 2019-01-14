import { createStore } from 'redux';
import { AsyncStorage, Alert } from 'react-native';

const initialState = {
    count: 0,
    email: null,
    loggedinKey: null,
    homePageNumber: 1
  };
  
  const reducer = (state = initialState, action) => {
    switch(action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        };
      case 'DECREMENT':
        return {
          count: state.count - 1
        };
      case 'LOGIN':
        return {
          email: action.email
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
          "You Can't go under page 1.",
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
