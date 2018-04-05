
import { StackNavigator } from 'react-navigation';
import LoginScreen from '../Components/LoginScreen';
import MainScreen from '../Components/MainScreen';


const AppNavigator = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  MainScreen: { screen: MainScreen },
},
{
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
    /*
   * Use modal on iOS because the card mode comes from the right,
   * which conflicts with the drawer example gesture
   */
    mode: 'card',
      navigationOptions: {
        gesturesEnabled: false
  },
  cardStyle: {
          backgroundColor: 'rgba(0, 0, 0, 1)',
        }
  },
);

export default AppNavigator;
