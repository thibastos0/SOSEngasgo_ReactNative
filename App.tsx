import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen }  from './src/screens/WelcomeScreen';
import  HomeScreen  from './src/screens/HomeScreen';


const RootStack = createNativeStackNavigator({

  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {title: 'SOSEngasgo'},
    },
    Home: {
      screen: HomeScreen,
      options: {title: 'SOSEngasgo'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
