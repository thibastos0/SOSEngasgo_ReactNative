import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as screens from './src/screens';


const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen 
          name="Welcome" 
          component={screens.WelcomeScreen} 
          options={{ title: 'SOSEngasgo' }} 
        />
        
        <Stack.Screen 
          name="Login" 
          component={screens.LoginScreen} 
          options={{ title: 'Login' }} 
        />

        <Stack.Screen 
          name="Register" 
          component={screens.RegisterScreen} 
          options={{ title: 'Cadastro' }} 
        />
        
        <Stack.Screen 
          name="Home" 
          component={screens.HomeScreen} 
          options={{ title: 'Início' }} 
        />
        
        <Stack.Screen 
          name="ConfirmLocation" 
          component={screens.ConfirmLocationScreen} 
          options={{ title: 'Confirmar Localização' }} 
        />
      
      </Stack.Navigator>
    </NavigationContainer>

  );
}