import { View, Text } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import DestinationScreen from '../screens/DestinationScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown: false}}>
            <Stack.Screen component={WelcomeScreen} name="Welcome" />
            <Stack.Screen component={HomeScreen} name="Home" />
            <Stack.Screen component={DestinationScreen} name="Destination" />
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation