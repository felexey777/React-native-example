import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput
      } from 'react-native';
import { connect } from 'react-redux';
import UserActions from '../Redux/UserRedux';
import SettinActions from '../Redux/SettingRedux';

@connect(
  state => ({
    userName: state.setting.userName,
  }),
  dispatch => ({
    go: (data) => dispatch(UserActions.go(data)),
    setName: (data) => dispatch(SettinActions.setName(data)),

  }))
export default class LoginScreen extends Component {


  render() {
    return (
      <View
        style={style.mainBox}
        behavior={'padding'}
      >
        <TextInput
          style={style.textInput}
          onChangeText={(name) => this.props.setName({ name })}
          value={this.props.userName}
          placeholder={'Please enter name!'}
        />
       <TouchableOpacity
         onPress={() => {
           this.props.navigation.navigate('MainScreen');
         }
       }
       style={style.button}
       >
        <Text
          style={style.buttonText}
        >
          GO
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}
const style = {
  mainBox: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    marginBottom: 20,
    borderRadius: 10,
  },
  button: {
    width: '80%',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'

  }
};
