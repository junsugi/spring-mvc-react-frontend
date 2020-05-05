import React from 'react';
import {Splash} from '../../pages';
import {Signin} from '../../pages/Register';
import {Signup} from '../../pages/Register';
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

const SignupStackNavigator = createStackNavigator(
  {
    Signup: {
      screen: Signup,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
  },
  {initialRouteName: 'Signup'},
);

const SignupRootNavigator = createStackNavigator(
  {
    SignupStackNavigator: {
      screen: SignupStackNavigator,
      navigationOptions: {
        headerShown: false,
        gestureEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'SignupStackNavigator',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Splash,
    Signin: SiginRootNavigator,
    Signup: SignupRootNavigator,
  },
  {initialRouteName: 'Splash'},
);

export default createAppContainer(AppNavigator);
