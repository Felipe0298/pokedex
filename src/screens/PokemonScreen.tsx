import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/Navigator';
import  Icon  from 'react-native-vector-icons//Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, "Pokemon"> { };

export const PokemonScreen = ({ navigation, route }: Props) => {

  const { simplePokemon, color } = route.params;
  const {id, name, picture } = simplePokemon;
  const { top } = useSafeAreaInsets();

  const { isLoading, pokemon} = usePokemon(id);
  console.log(pokemon)
  return (
    <View style={{ flex:1 }}>
      {/* Header Container */}
      <View style={{
        ...styles.headerContainer,
        backgroundColor: color,
      }}>

        {/* BackButton */}
        <TouchableOpacity
        onPress={() => navigation.pop()}
        activeOpacity={0.8}
        style={{
          ...styles.backButton,
          top: top + 5
        }}>

        <Icon 
        name='arrow-back-outline'
        color='white'
        size={30}
        />
        </TouchableOpacity>

        {/* Pokemon Name */}
        <Text style={{
          ...styles.pokemonName,
          top: top+40
        }}>
          {name + '\n'} #{id}
        </Text>

        {/* Pokebola blanca */}

        <Image 
        source={require('../assets/pokebola-blanca.png')}
        style={styles.pokebola}
        />

        {/* Pokemon */}

        <FadeInImage
          uri={picture}
          style={styles.pokemonImage}
        />

      </View>

      {/* Detalles y Loading */}
      <View style={styles.loadingIndicator}>
        <ActivityIndicator
        color={color}
        size={'large'}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    alignItems:'center',
    borderBottomLeftRadius:1000,
    borderBottomRightRadius:1000,
  },
  backButton:{
    position:'absolute',
    left:20,
  },
  pokemonName:{
    color:'white',
    fontSize:40,
    alignSelf:'flex-start',
    left:20
  },
  pokebola:{
    width:250,
    height:250,
    bottom: -20,
    opacity: 0.7
  },
  pokemonImage:{
    position:'absolute',
    width:250,
    height:250,
    bottom: -15
  },
  loadingIndicator:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center'

  }
});