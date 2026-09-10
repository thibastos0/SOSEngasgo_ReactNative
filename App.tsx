import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as screens  from './src/screens';


const RootStack = createNativeStackNavigator({
  screens: {
    Welcome: {
      screen: screens.WelcomeScreen,
      options: {title: 'SOSEngasgo'},
    },
    Login: {
      screen: screens.LoginScreen,
      options: {title: 'Login'},
    },
    Home: {
      screen: screens.HomeScreen,
      options: {title: 'Home'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
