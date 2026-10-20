import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import * as screens from './src/screens';

const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen
        name="Home"
        component={screens.HomeScreen}
        options={{ title: 'Início' }}
      />
      <Drawer.Screen
        name="Training"
        component={screens.TrainingScreen}
        options={{ title: 'Treinamentos' }}
      />
      <Drawer.Screen
        name="Orientations"
        component={screens.OrientationsScreen}
        options={{ title: 'Orientações' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer navigationInChildEnabled>
      <RootStack.Navigator
        initialRouteName="DrawerRoot"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="DrawerRoot"
          component={DrawerNavigator}
        />
        <RootStack.Screen
          name="ConfirmLocation"
          component={screens.ConfirmLocationScreen}
        />
        <RootStack.Screen
          name="Emergency"
          component={screens.EmergencyScreen}
        />
        <RootStack.Screen
          name="Login"
          component={screens.LoginScreen}
        />
        <RootStack.Screen
          name="Register"
          component={screens.RegisterScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
