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

export default class Main extends React.Component {
    constructor(){
        super();
        this.state = {
            id : null,
            pwd : null,
        }
    }

    render(){
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
            <Text style={{fontSize: 20}}> 메인화면</Text>
          </View>

            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <TouchableOpacity
                    onPress = {async () =>{
                        try { 
                            const response = await axios.get('http://IP주소:8080/petcares/api/main/').then(res => {
                                console.log(res.data);
                                this.setState({
                                    id : res.data.userId,
                                    pwd : res.data.password,
                                }); 
                            });                            
                            console.log(response);
                          } catch (error) {
                            console.error(error);
                          }
                    }
                    }>
                    <View style={{
                        width: 200,
                        height: 50,
                        borderRadius: 10,
                        marginTop: 10,
                        backgroundColor: '#fdeaab',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize : 20,
                        }}>
                            눌러보세용
                        </Text>
                    </View>
                </TouchableOpacity>               
            </View>

            <View style={{
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>아이디 : {this.state.id}</Text>
                <Text>비밀번호 : {this.state.pwd}</Text>
            </View>

            <View>

            </View>

        </View>
        </>
        );
    }
}