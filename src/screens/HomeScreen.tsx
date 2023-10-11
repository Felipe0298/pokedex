import React from 'react';
import { FlatList, Image } from 'react-native';
import { Button, StyleSheet, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { ActivityIndicator } from 'react-native';
import { FadeInImage } from '../components/FadeInImage';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets()
  const  {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={styles.pokebolaBG}
      />

      <FlatList 
        data={ simplePokemonList }
        keyExtractor={ (pokemon) => pokemon.id}
        showsVerticalScrollIndicator= {false}
        numColumns={2}

        //Header
        ListHeaderComponent={(
          <Text style={{
            ...styles.title,
            ...styles.globalMargin,
            top: top + 20,
            marginBottom: top + 20,
          }}>Pokedex</Text>
        )}

        renderItem={ ({ item }) => ( <PokemonCard pokemon={item}/> )}

        //Infinite scroll

        onEndReached={loadPokemons}
        onEndReachedThreshold={ 0.4 }

        ListFooterComponent=
        { <ActivityIndicator 
          style = {{ height:100 }}
          size= {20}
          color='grey'
          />}

      />
    </>
  );
}