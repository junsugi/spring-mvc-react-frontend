import React from 'react';
import {Splash} from '../../pages';
import {Signin} from '../../pages/Register';
import {Signup} from '../../pages/Register';
import {Main} from '../../pages/Register';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const SiginStackNavigator = createStackNavigator(
  {
    Signin: {
      screen: Signin,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
    Main: {
      screen: Main,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },   
  },
  {initialRouteName: 'Signin'},
);
const SiginRootNavigator = createStackNavigator(
  {
    SiginStackNavigator: {
      screen: SiginStackNavigator,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'SiginStackNavigator',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash,
    Signin, Signup, Main : SiginRootNavigator,
  },
  {initialRouteName: 'Splash'},
);

export default createAppContainer(AppNavigator);
