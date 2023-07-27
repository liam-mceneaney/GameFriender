import React, {useLayoutEffect, useState, useMemo} from 'react'
import {View, Text, Button, SafeAreaView,  TouchableOpacity, Image, ImageBackground} from 'react-native'
import TinderCard from 'react-tinder-card'
import {useNavigation} from '@react-navigation/core'
import tw from "tailwind-rn"
import {useTailwind} from 'tailwind-rn';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Header from '../Components/Header'

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginTop: '40%'
  },
  header: {
    color: '#000',
    fontSize: 30,
    marginBottom: 30,
  },
  cardContainer: {
    width: '95%',
    maxWidth: 360,
    height: 400,
  },
  card: {
    position: 'absolute',
    backgroundColor: '#fff',
    width: '100%',
    maxWidth: 400,
    height: 400,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    borderRadius: 20,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    borderRadius: 20,
    position: 'absolute',
    top: 0
  },
  cardTitle: {
    position: 'absolute',
    bottom: 0,
    margin: 10,
    color: '#000',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
    textShadowColor: 'rgba(1, 1, 1, 1)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 20
  },
  buttons: {
    margin: 20,
    zIndex: -100,
  },
  infoText: {
    height: 28,
    justifyContent: 'center',
    display: 'flex',
    zIndex: -100,
  }
}

const db = [
  {
    name: `World's Strongest Gamer`,
    img: require('../assets/profiles/worlds_strongest_gamer.png'),
    profile: 'Competitive Games | 5th Prestige Battlebit'
  },
  {
    name: 'The Meatball Man',
    img: require('../assets/profiles/meatball_man.png'),
    profile: 'Tabletop Gaming | Genshin Impact'
  },
  {
    name: 'Sanic',
    img: require('../assets/profiles/sanic.png'),
    profile: 'snoic the edgehoag so cool'
  }
]

const alreadyRemoved = [];
let profileState = db; // force updating profiles

const FindGF = () => {
  const navigation = useNavigation();
  const tw = useTailwind();
  const [profiles, setProfiles] = useState(db)
  const [lastDirection, setLastDirection] = useState();

  const childRefs = useMemo(() => Array(db.length).fill(0).map(i => React.createRef()), [])

  const swiped = (direction, nameToDelete) => {
    console.log('removing: ' + nameToDelete + ' to the ' + direction)
    setLastDirection(direction)
    alreadyRemoved.push(nameToDelete)
  }
  const outOfFrame = (name) => {
    console.log(name + ' left the screen!')
    profileState = profileState.filter(profile => profile.name !== name)
    setProfiles(profileState)
  }

  const swipe = (dir) => {
    const cardsLeft = profiles.filter(person => !alreadyRemoved.includes(person.name))
    if (cardsLeft.length) {
      const toBeRemoved = cardsLeft[cardsLeft.length - 1].name
      const index = db.map(person => person.name).indexOf(toBeRemoved)
      alreadyRemoved.push(toBeRemoved)
      childRefs[index].current.swipe(dir)
    }
  }

  //hides the header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown:false,
    })
  }, [])


  return (
    <SafeAreaView style={tw('flex-1')}>
        <Header>

        </Header>

      {/* {cards} */}
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          {profiles.map((profile, index) =>
            <TinderCard ref={childRefs[index]} key={profile.name} onSwipe={(dir) => swiped(dir, profile.name)} onCardLeftScreen={() => outOfFrame(profile.name)}>
              <View style={styles.card}>
                <ImageBackground style={styles.cardImage} source={profile.img}>
                  <Text style={styles.cardTitle}>{profile.name}</Text>
                </ImageBackground>
                {/* Profile Section */}
                <View style={[tw('absolute bg-white w-full h-10 rounded-full'), {bottom: -40}]}>

                  <Text>{profile.profile}</Text>
                </View>
              </View>


            </TinderCard>
          )}
        </View>
      </View>
      {/* {end cards} */}

    </SafeAreaView>
  );
}

export default FindGF