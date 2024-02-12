import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native';

import Login from './screens/Login';
import Signin from './screens/Signin';
import Pattern from './screens/Pattern';
import Checkpattern from './screens/Checkpattern';
import Home from './screens/Home';

const Stack = createStackNavigator();


const App = () => {
 
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false,}} >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signin} />
      <Stack.Screen name="Pattern" component={Pattern} />
      <Stack.Screen name="Cpattern" component={Checkpattern} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
    </NavigationContainer>
    // <Login/>
    // <Pattern></Pattern>
    // <Checkpattern></Checkpattern>
    // <Signin></Signin>
  )
}

export default App
