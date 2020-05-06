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

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      id: null,
      pwd: null,
      name: null,
      address: null,
      phoneNum: null,
    };
  }
  render() {
    return (
      <>
      <ScrollView>
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
              <Text style={{fontSize: 20}}>회원가입</Text>
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

              <View style={styles.sectionContainer}>
                <Text style={{marginBottom: 20}}>이름</Text>
                <TextInput
                  placeholder={'이름을 입력해주세요.'}
                  onChangeText={(value) => {
                    this.setState({name: value});
                  }}
                  style={{
                    borderWidth: 2,
                    borderRadius: 20,
                    borderColor: '#a0855b',
                  }}></TextInput>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={{marginBottom: 20}}>핸드폰 번호</Text>
                <TextInput
                  placeholder={'핸드폰번호를 입력해주세요.'}
                  onChangeText={(value) => {
                    this.setState({phoneNum: value});
                  }}
                  style={{
                    borderWidth: 2,
                    borderRadius: 20,
                    borderColor: '#a0855b',
                  }}></TextInput>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={{marginBottom: 20}}>주소</Text>
                <TextInput
                  placeholder={'주소를 입력해주세요.'}
                  onChangeText={(value) => {
                    this.setState({address: value});
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
                    const userId = this.state.id;
                    const password = this.state.pwd;
                    const address = this.state.address;
                    const phoneNum = this.state.phoneNum;
                    const username = this.state.name;
                    try {
                      const config = {
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8',
                        },
                      };
                      const response = await axios.post(
                        'http://IP주소:8080/petcares/api/signup/',
                        JSON.stringify({userId, username, password, address, phoneNum}),
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
                      회원가입
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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

export default Signup;
