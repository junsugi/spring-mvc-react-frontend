/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import axios from 'axios';
export default class App extends React.Component {
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
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <Header />
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text>아이디</Text>
                <TextInput
                  placeholder={'아이디를 입력해주세요'}
                  onChangeText={(value) => {
                    this.setState({id: value});
                  }}
                  style={{
                    borderWidth: 1,
                    borderRadius: 6,
                    borderColor: Colors.black,
                  }}></TextInput>
              </View>
              <View style={styles.sectionContainer}>
                <Text>비밀번호</Text>
                <TextInput
                  placeholder={'비밀번호를 입력해주세요'}
                  onChangeText={(value) => {
                    this.setState({pwd: value});
                  }}
                  style={{
                    borderWidth: 1,
                    borderRadius: 6,
                    borderColor: Colors.black,
                  }}></TextInput>
              </View>
              <View style={(styles.sectionContainer, {alignSelf: 'center'})}>
                <TouchableOpacity
                  onPress={async () => {
                    const username = this.state.id;
                    const password = this.state.pwd;
                    try {
                      // console.log(JSON.stringify({username, password}));
                      // const formData = new FormData();
                      // formData.append('username', this.state.id);
                      // formData.append('password', this.state.pwd);
                      const config = {
                        headers: {
                          'Content-Type': 'application/json; charset=UTF-8',
                        },
                      };
                      const response = await axios.post(
                        'http://192.168.0.101:8080/petcares/api/register/',
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
                      marginTop: 10,
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
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
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