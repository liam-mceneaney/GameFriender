import React, {useLayoutEffect, useState, useMemo} from 'react'
import {TextInput,View, Text, Button, SafeAreaView,  TouchableOpacity, Image, ImageBackground} from 'react-native'
import TinderCard from 'react-tinder-card'
import {useNavigation} from '@react-navigation/core'
import tw from "tailwind-rn"
import {useTailwind} from 'tailwind-rn';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../Components/Header'

const Profile = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])

  return (
    <SafeAreaView style={tw('flex-1')}>
          {/* Header*/}
        <Header></Header>

      {/* End Header*/}


    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={tw('text-center p-4 font bold text-red-400')}>Edit Profile Pic</Text>
      <TouchableOpacity onPress={()=> console.log('edit photo')}>
        <Image
                style={tw("h-20 w-20 rounded-full")}
                source={require('../assets/profiles/pogchamp.png')}>
        </Image>
      </TouchableOpacity>

      <Text style ={tw('text-center p-4 font bold text-red-400')}>
        Edit Profile
      </Text>
      <TextInput
        style ={tw("text-center text-xl pb-2")}
        placeholder='Add games you like and how you like to play'>
      </TextInput>
    </View>
    </SafeAreaView>
  );
}

export default Profile