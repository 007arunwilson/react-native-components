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
  View,
  ToastAndroid,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';

import { createStackNavigator, createSwitchNavigator } from 'react-navigation';
import ComponentsIndex from './src/components/screens/ComponentsIndex';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
class App extends Component<Props> {

  state = { redirectTimerSecs: 10, _appSplashState:'notDefined' };

  componentDidMount() {

    App.getAppState()
      .then(response => {

        if(response == 1){
          this.props.navigation.navigate('Others');
        }else{
          this.setState({_appSplashState:0});
          this.startTimerInterval();
        }

      }).catch(error=>{



      });
      //this.startTimerInterval();

  }

  componentWillUnmount() {



  }

  saveAppState = async () => {

    try {
      return await AsyncStorage.setItem('@MySuperStore:_appSplashState', '1');
    } catch (error) {
      ToastAndroid.show('Something went wrong! Appstate not saved.', ToastAndroid.SHORT);
    }

  }

  static getAppState = async () => {

    try {
      return await AsyncStorage.getItem('@MySuperStore:_appSplashState');
    } catch (error) {
    }

  }

  destroyTimerIntervalAndNavigate = () => {

    clearInterval(this.intervalInstance);
    this.saveAppState()
    .then(response=>{
      this.props.navigation.navigate('Others');
    });
    

  }

  startTimerInterval() {

    this.intervalInstance = setInterval(() => {

      let stateTimer = this.state.redirectTimerSecs;
      --stateTimer;

      this.setState({ redirectTimerSecs: stateTimer });

      if (stateTimer == 0) this.destroyTimerIntervalAndNavigate();

    }, 1000);

  }

  render() {

    appSplashData = (
      <View style={{flex: 1,justifyContent: 'space-around',padding: 10}} >
        <ActivityIndicator size="large" color="#000000" />
      </View>
    );

    if(this.state._appSplashState == 0)
    {
      appSplashData = (<View style={styles.container}>
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
      </View>);

    }

    return (appSplashData);
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
  color: '#333',
};

const OthersStackNavigatorInstance = createStackNavigator({
  ComponentsIndex: {
    screen: ComponentsIndex,
    path: '/componentsIndex',
    navigationOptions: ({ navigation }) => ({
      title: `Components Index`,
      headerTitleStyle: defaultNavigationTitleStyle,
    }),
  },
}, {
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
  Others: OthersStackNavigatorInstance
}, {
    initialRouteName: 'App',
  })

const defaultViewVar = switchNavigatorInstance;

export default defaultViewVar;
