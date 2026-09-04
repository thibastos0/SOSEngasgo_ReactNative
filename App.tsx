import {createStaticNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { WelcomeScreen }  from './src/screens/WelcomeScreen';


const RootStack = createNativeStackNavigator({
  screens: {
    Welcome: {
      screen: WelcomeScreen,
      options: {title: 'SOSEngasgo'},
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
