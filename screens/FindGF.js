import React, {useLayoutEffect} from 'react'
import {View, Text, Button, SafeAreaView,  TouchableOpacity, Image} from 'react-native'
import TinderCard from 'react-tinder-card'
import {useNavigation} from '@react-navigation/core'
import tw from "tailwind-rn"
import {useTailwind} from 'tailwind-rn';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



const FindGF = () => {
  const navigation = useNavigation();
  const tw = useTailwind();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  const onSwipe = (direction) => {
    console.log('You swiped: ' + direction)
  }

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + ' left the screen')
  }

  return (
    <SafeAreaView >
      {/* Header*/}
        <View style={tw("flex-row items-center justify-between relative")}>
          <TouchableOpacity style={tw("left-5 top-6")} onPress={()=> navigation.navigate("Profile")}>
            <Image
              style={tw("h-10 w-10 rounded-full")}
              source={require('../assets/profiles/meatball_man.png')}>
            </Image>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("FindGF")}>
            <MaterialCommunityIcons style={tw("top-6")} name="nintendo-game-boy" size={48} color="black" />
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.navigate("Parties")}>
              <FontAwesome style={tw("right-5 top-6")} name="group" size={24} color="black" />
          </TouchableOpacity>
        </View>

      {/* Header*/}

      {/* // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> */}
{/*
        <TinderCard onSwipe={onSwipe} onCardLeftScreen={() => onCardLeftScreen('fooBar')} preventSwipe={['right', 'left']}>
        <Image source={require('../assets/profiles/meatball_man.png')}></Image>
          <Text>Find a GF</Text>
        </TinderCard> */}

      {/* </View> */}
    </SafeAreaView>
  );
}

export default FindGF