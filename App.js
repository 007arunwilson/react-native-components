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

import {createStackNavigator} from 'react-navigation';

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


export default createStackNavigatorInstance = createStackNavigator({
  // For each screen that you can navigate to, create a new entry like this:
  App: {
    // `ProfileScreen` is a React component that will be the main content of the screen.
    screen: App,
    // When `ProfileScreen` is loaded by the StackNavigator, it will be given a `navigation` prop.

    // Optional: When deep linking or using react-navigation in a web app, this path is used:
    path: '/',
    // The action and route params are extracted from the path.

    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({ navigation }) => ({
      title: `React native components`,
      headerTitleStyle:{fontWeight:'normal'}
    }),
  },
});
