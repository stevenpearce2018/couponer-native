import React from "react";
import styles from "../styles";
import { Text, View , TouchableOpacity} from "react-native";
import { connect } from 'react-redux';
import { Platform } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import AboutScreen from '../screens/AboutScreen';
import SignupScreen from '../screens/SignupScreen';
import SearchScreen from '../screens/SearchScreen';

const MakeNavTab = (component, isSelected) => {
      return (
        <View style={{width: 50, height: 35, textAlign: 'center', fontWeight: 'bold', alignItems: 'center' }}>
        <TouchableOpacity style={{alignItems: 'center' }} onPress={component.setTab}>
        <TabBarIcon focused={isSelected} name={Platform.OS === 'ios' ? component.ios : component.android} />
        <Text>{component.text}</Text>
        </TouchableOpacity>
        </View>
      );
};

class AppNav extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={styles.navContainer}>
          {this.props.currentNav}
          <View style={{backgroundColor: '#fff', flex: 1, flexDirection: 'row', justifyContent: 'space-between', position: 'absolute', left: 0, right: 0, bottom: -10}}>
            {MakeNavTab({ setTab: () => this.props.dispatch({ type: 'SETNAV', nav: <HomeScreen/>, navSelectedBools: {home: true, login: false, about: false, signup: false, search: false}}), screen: <HomeScreen/>, text: "Home", ios: `ios-information-circle${this.props.navSelectedBools && this.props.navSelectedBools.home ? '' : '-outline'}`, android: 'md-home' }, this.props.navSelectedBools && this.props.navSelectedBools.home)}
            {MakeNavTab({ setTab: () => this.props.dispatch({ type: 'SETNAV', nav: <AboutScreen/>, navSelectedBools: {home: false, login: false, about: true, signup: false, search: false}}), screen:<AboutScreen/>, text: "About", ios: "ios-link", android: "md-information-circle" }, this.props.navSelectedBools && this.props.navSelectedBools.about)}
            {MakeNavTab({ setTab: () => this.props.dispatch({ type: 'SETNAV', nav: <LoginScreen/>, navSelectedBools: {home: false, login: true, about: false, signup: false, search: false}}), screen:<LoginScreen/>, text: "Login", ios: "ios-options", android: "md-send" }, this.props.navSelectedBools && this.props.navSelectedBools.login)}
            {MakeNavTab({ setTab: () => this.props.dispatch({ type: 'SETNAV', nav: <SearchScreen/>, navSelectedBools: {home: false, login: false, about: false, signup: false, search: true}}), screen:<SearchScreen/>, text: "Search", ios: "ios-options", android: "md-search" }, this.props.navSelectedBools && this.props.navSelectedBools.search)}
            {MakeNavTab({ setTab: () => this.props.dispatch({ type: 'SETNAV', nav: <SignupScreen/>, navSelectedBools: {home: false, login: false, about: false, signup: true, search: false}}), screen:<SignupScreen/>, text: "Signup", ios: "ios-options", android: "md-list" }, this.props.navSelectedBools && this.props.navSelectedBools.signup)}
          </View>
      </View>
    );
  }
};

const mapStateToProps = state => ({ navSelectedBools: state.navSelectedBools, currentNav: state.currentNav, loggedinKey: state.loggedinKey })

export default connect(mapStateToProps)(AppNav);
