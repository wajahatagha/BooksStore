import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../Screens/Welcome';
import Home from '../Screens/Home';
import BookScreen from '../Screens/BookScreen';



const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='BookScreen' component={BookScreen} />


    </Stack.Navigator>
    
  )
}

export default AppNavigation