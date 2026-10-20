import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as screens from './src/screens';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import { globalStyles } from './src/theme/globalStyles';

const Drawer = createDrawerNavigator();
const RootStack = createNativeStackNavigator();

function TrainingScreen(props: any) {
  return (
    <View style={globalStyles.container}>
      <Header
        title="Treinamento"
        showMenuButton
        showAuthButton
        navigation={props.navigation}
      />
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>Treinamento</Text>
        <Text style={globalStyles.subtitle}>
          Módulo de treinamento em desenvolvimento.
        </Text>
      </View>
      <Footer />
    </View>
  );
}

function OrientationsScreen(props: any) {
  return (
    <View style={globalStyles.container}>
      <Header
        title="Orientações"
        showMenuButton
        showAuthButton
        navigation={props.navigation}
      />
      <View style={globalStyles.content}>
        <Text style={globalStyles.title}>Orientações</Text>
        <Text style={globalStyles.subtitle}>
          Guia rápido de orientações de primeiros socorros em desenvolvimento.
        </Text>
      </View>
      <Footer />
    </View>
  );
}

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
        component={TrainingScreen}
        options={{ title: 'Treinamento' }}
      />
      <Drawer.Screen
        name="Orientations"
        component={OrientationsScreen}
        options={{ title: 'Orientações' }}
      />
      <Drawer.Screen
        name="Login"
        component={screens.LoginScreen}
        options={{ title: 'Login' }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="MainDrawer"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen
          name="MainDrawer"
          component={DrawerNavigator}
        />

        <RootStack.Screen
          name="ConfirmLocationScreen"
          component={screens.ConfirmLocationScreen}
        />

        <RootStack.Screen
          name="ConfirmLocation"
          component={screens.ConfirmLocationScreen}
        />

        <RootStack.Screen
          name="EmergencyScreen"
          component={screens.EmergencyScreen}
        />

        <RootStack.Screen
          name="RegisterScreen"
          component={screens.RegisterScreen}
        />

        <RootStack.Screen
          name="Register"
          component={screens.RegisterScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
