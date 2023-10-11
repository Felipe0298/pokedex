import React, { useState, useEffect, useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import ImageColors from 'react-native-image-colors'
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { FadeInImage } from './FadeInImage';
import { useNavigation } from '@react-navigation/native';

const windowWidth = Dimensions.get('window').width

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {

  const [bgColor, setBgColor] = useState('grey');
  const isMounted = useRef(true);
  const navigation = useNavigation<any>();

  useEffect(() => {
    ImageColors.getColors(pokemon.picture, {
      fallback: 'grey',
      cache: true,
      key: pokemon.picture,
    }).then((colors: any) => {

      if (!isMounted.current) return;

      colors.platform === 'ios';
      switch (colors.platform) {
        case 'android':
          setBgColor(colors.dominant || bgColor);
          break;
        case 'ios':
          setBgColor(colors.background || bgColor);
          break;
        case 'web':
          setBgColor(colors.dominant || bgColor);
          break;
        default:
          setBgColor(bgColor);
          break;
      }
    });
    return () => {
      isMounted.current = false
    }
  }, []);



  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={
        () => navigation.navigate('Pokemon', {
          simplePokemon: pokemon,
          color:bgColor
        })
      }>
      <View style={{
        ...styles.cardContainer,
        width: windowWidth * 0.4,
        backgroundColor: bgColor
      }}>
        {/* Nombre de pokemon y ID */}
        <View>
          <Text style={styles.name}>
            {pokemon.name}
            {'\n#' + pokemon.id}
          </Text>
        </View>

        <View style={styles.pokebolaContainer}>
          <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
          />
        </View>

        <FadeInImage
          uri={pokemon.picture}
          style={styles.pokemonImage}
        />

      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    //backgroundColor: 'grey',
    height: 120,
    width: 160,
    marginBottom: 25,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10
  },
  pokebola: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: -25,
    right: -25,
  },
  pokemonImage: {
    width: 120,
    height: 120,
    position: 'absolute',
    right: -8,
    bottom: -5
  },
  pokebolaContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 0,
    right: 0,
    overflow: 'hidden',
    opacity: 0.5
  }

});
