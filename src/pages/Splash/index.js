import React from 'react';
import {View, Text, Animated} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';

class Splash extends React.Component {
  constructor() {
    super();
    this.state = {
      logoOpacity: new Animated.Value(1),
    };
    this.logoFadeOut = this.logoFadeOut.bind(this);
    this.logoFadeIn = this.logoFadeIn.bind(this);
  }
  componentDidMount() {
    this.logoFadeIn();
    this.logoFadeOut();
  }
  logoFadeOut() {
    Animated.timing(this.state.logoOpacity, {
      toValue: 0,
      duration: 500,
      delay: 1400,
    }).start(() => {
      this.props.navigation.navigate('Signin');
    });
  }

  logoFadeIn() {
    Animated.timing(this.state.logoOpacity, {
      toValue: 1,
      duration: 500,
      delay: 600,
    }).start();
  }
  render() {
    return (
      <View style={{flex: 1}}>
        {/* <View style={{flex: 1}}></View> */}
        <Animated.View
          style={{
            backgroundColor: '#fdeaab',
            flex: 8,
            opacity: this.state.logoOpacity,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AutoHeightImage
            style={{marginBottom: 20}}
            source={require('./image/logo.png')}
            width={100}></AutoHeightImage>
          <Text style={{fontSize: 20, color: '#a0855b', fontWeight: 'bold'}}>
            PET CARES
          </Text>
        </Animated.View>
        {/* <View style={{flex: 1}}></View> */}
      </View>
    );
  }
}
export default Splash;
