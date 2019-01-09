import React from 'react';
import { Platform, StatusBar, Text, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import styles from './styles';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  count: 0
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
    default:
      return state;
  }
}

const store = createStore(reducer);

export default class App extends React.Component {
  state = {
    drawerOpen: false,
    isLoadingComplete: false,
    loggedinKey: ""
  };

  toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen });

  login = loggedinKey => this.setState({ loggedinKey: loggedinKey});

  componentDidMount = () => AsyncStorage.getItem('loggedinKey', (err, result) => {
    this.setState({ loggedinKey: result});
  });

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
        <View style={styles.container}>
          <View style={styles.header}>
          <Text style={styles.title}>
            Unlimited Couponer
          </Text>
          </View>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator/>
        </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => this.setState({ isLoadingComplete: true });
}

