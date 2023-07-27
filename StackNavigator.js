import React from 'react'
import {View, Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import FindGF from './screens/FindGF.js'
import Parties from './screens/Parties'
import Profile from './screens/Profile'

const Stack = createNativeStackNavigator();


const StackNavigator = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="FindGF" component={FindGF} />
        <Stack.Screen name="Profile"component = {Profile} />
        <Stack.Screen name="Parties"component = {Parties} />

      </Stack.Navigator>
  )

}

export default StackNavigator