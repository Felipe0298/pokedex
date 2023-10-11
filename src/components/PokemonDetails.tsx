import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PokemonFull } from '../interfaces/pokemonInterfaces';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  pokemon: PokemonFull;
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
    >
      {/* Types */}
      <View style={{
        ...styles.container,
        marginTop: 370
      }}>
        <Text style={styles.title}>Types</Text>
        <View style={{ flexDirection: 'row' }}>
          {
            pokemon.types.map(({ type }) => (
              <Text
                style={{
                  ...styles.regularText,
                  marginRight: 10
                }}
                key={type.name}
              >
                {type.name}
              </Text>
            ))
          }

        </View>
      </View>

      {/* Sprites */}
      <View style={{
        ...styles.container,
        marginTop: 20
      }}>
        <Text style={styles.title}>Sprites</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'black'
  },
  regularText: {
    fontSize: 19,
    color: 'black'
  }
});