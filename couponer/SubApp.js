import React from "react";
import {
  Text,
  View,
  Platform
} from "react-native";
import { connect } from 'react-redux';
import AppNav from './navigation/AppNav';
import styles from './styles';
import { AppLoading, Asset, Font, Icon } from 'expo';

class SubApp extends React.Component {
    state = {
      drawerOpen: false,
      isLoadingComplete: false,
      loggedinKey: ""
    };
  
    toggleDrawer = () => this.setState({ drawerOpen: !this.state.drawerOpen });
  
    login = loggedinKey => this.setState({ loggedinKey: loggedinKey});
  
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
          <View style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.title}>
              Unlimited Couponer
            </Text>
            </View>
            <Text style={styles.title}>
              {this.props.email ? `Welcome ${this.props.email}!` : `Welcome Guest!`}
            </Text>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNav/>
          </View>
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


const mapStateToProps = state => ({ count: state.count, email: state.email, loggedinKey: state.loggedinKey })

export default connect(mapStateToProps)(SubApp);