import React, { Component } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  FlatList
}
from 'react-native';
import { connect } from 'react-redux';
import UserActions from '../Redux/UserRedux';


@connect(
  state => ({
    userName: state.setting.userName,
    adviserData: state.user.adviserData
  }),
  dispatch => ({
    logout: (data) => dispatch(UserActions.logout(data)),
  }))


export default class MainScreen extends Component {
  componentDidMount = () => {

  }

  render() {
    return (
      <View
        style={style.mainBox}
      >
        <View
          style={style.header}
        >
        <Text
          style={style.name}
        >Hi {this.props.userName}! This is your personal adviser</Text>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }
        }
        style={style.button}
        >
         <Text
           style={style.buttonText}
         >
           GO BACK
         </Text>
       </TouchableOpacity>
       </View>
       <View
         style={style.body}
       >
         <FlatList
           data={this.props.adviserData}
           renderItem={({ item }) => (
             <View
               style={style.listItem}
             >
               <Text
                 style={{
                   color: 'black',
                   fontSize: 22,
                 }}
               >{item}</Text>
             </View>
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
         />
       </View>
      </View>
    );
  }
}
const style = {
  mainBox: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',

  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 2
  },
  name: {
    color: 'black',
    marginBottom: 20
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

  },
  listItem: {
    justifyContent: 'center',
    alignItems: 'center',
  }
};
