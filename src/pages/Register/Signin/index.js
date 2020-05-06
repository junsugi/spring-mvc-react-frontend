import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Platform,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import axios from 'axios';
import AutoHeightImage from 'react-native-auto-height-image';

class Signin extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      pwd: null,
    };
  }
  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
          }}>
          <View
            style={{
              width: '100%',
              height: 60,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#fdeaab',
            }}>
            <AutoHeightImage
              source={require('./image/logo.png')}
              width={60}></AutoHeightImage>
            <Text style={{fontSize: 20}}>로그인</Text>
          </View>

          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={{marginBottom: 8}}>아이디</Text>
              <TextInput
                placeholder={'아이디를 입력해주세요'}
                onChangeText={(value) => {
                  this.setState({id: value});
                }}
                style={{
                  borderWidth: 2,
                  borderRadius: 20,
                  borderColor: '#a0855b',
                }}></TextInput>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={{marginBottom: 20}}>비밀번호</Text>
              <TextInput
                secureTextEntry={true}
                placeholder={'비밀번호를 입력해주세요'}
                onChangeText={(value) => {
                  this.setState({pwd: value});
                }}
                style={{
                  borderWidth: 2,
                  borderRadius: 20,
                  borderColor: '#a0855b',
                }}></TextInput>
            </View>
            <View style={(styles.sectionContainer, {alignSelf: 'center'})}>
              <TouchableOpacity
                onPress={async () => {
                  const username = this.state.id;
                  const password = this.state.pwd;
                  try {
                    const config = {
                      headers: {
                        'Content-Type': 'application/json; charset=UTF-8',
                      },
                    };
                    const response = await axios.post(
                      'http://IP주소:8080/petcares/api/register/',
                      JSON.stringify({username, password}),
                      config,
                    );
                    console.log(response);
                    alert('ddd');
                  } catch (error) {
                    console.error(error);
                  }
                }}>
                <View
                  style={{
                    width: 200,
                    height: 50,
                    borderRadius: 10,
                    marginTop: 40,
                    backgroundColor: Colors.black,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 20, color: Colors.white}}>
                    로그인 하기
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View
                style={{
                  marginTop: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
            
              <Text
                  style={{
                    fontSize:10,
                  }}>
              
                아직도 회원이 아니신가요?
              </Text>
            </View>

            <View style={(styles.sectionContainer, {alignSelf: 'center'})}>
              <TouchableOpacity
                onPress={()=>this.props.navigation.navigate('Signup')}
              >
              <View
                  style={{
                    width: 200,
                    height: 50,
                    borderRadius: 10,
                    marginTop: 10,
                    backgroundColor: Colors.black,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 20, color: Colors.white}}>
                    회원가입
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={(styles.sectionContainer, {
              alignSelf: 'center',
              marginTop: 10,
              borderRadius: 10,
              backgroundColor: '#FFE4C4',
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              })}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Main')}>
                <Text>
                  GET TEST
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: Colors.lighter,
  },

  body: {height: '100%', backgroundColor: Colors.white},
  
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default Signin;
