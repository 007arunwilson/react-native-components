/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStackNavigator,createSwitchNavigator } from 'react-navigation';
import IndexScreen from './src/indexScreen';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

  state = { redirectTimerSecs: 10 };

  componentDidMount() {

    this.intervalInstance = setInterval(() => {

      let stateTimer = this.state.redirectTimerSecs;
      --stateTimer;

      this.setState({ redirectTimerSecs: stateTimer });

      if (stateTimer == 0) this.destroyIntervalAndNavigate();

    }, 1000);

  }

  destroyIntervalAndNavigate = () => {

    clearInterval(this.intervalInstance);
    this.props.navigation.navigate('Others');

  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <View style={styles.redirectTimerTextCont} >
          <Text style={styles.redirectTimerText}>
            This activity screen will redirect within
          </Text>
          <Text> {this.state.redirectTimerSecs} </Text>
          <Text style={styles.redirectTimerText} > secs</Text>
        </View>
        <Text style={{ fontSize: 12, textAlign: 'center', color: '#818181', marginTop: 5, }}>
          (This screen is left here intentionally)
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  redirectTimerText: {
    color: '#818181',
    fontSize: 10,
  },
  redirectTimerTextCont: {
    alignItems: 'center',
    marginTop: 20
  }
});


const defaultNavigationTitleStyle = {
  fontWeight: 'normal',
  color: '#B2B2B2',
};

const OthersStackNavigatorInstance = createStackNavigator({
  ComponentsIndex: {
    screen: IndexScreen,
    path: '/componentsIndex',
    navigationOptions: ({ navigation }) => ({
      title: `Components Index`,
      headerTitleStyle: defaultNavigationTitleStyle,
    }),
  },
},{
  initialRouteName: 'ComponentsIndex',
});

const switchNavigatorInstance = createSwitchNavigator({
  App: {
    screen: App,
    path: '/',
    navigationOptions: ({ navigation }) => ({
      header: null,
    }),
  },
  Others:OthersStackNavigatorInstance
},{
  initialRouteName:'App',
})

export default switchNavigatorInstance;
