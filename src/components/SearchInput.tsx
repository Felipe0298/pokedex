import React from 'react';
import { StyleSheet, View, TextInput, Platform, StyleProp, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  style?: StyleProp<ViewStyle>
}

export const SearchInput = ({style} : Props ) => {
  return (
    <View style={{...styles.container,
      ...style as any
      }}>
      <View style={styles.textBackground}>

        <TextInput
          placeholder='Buscar pokemon'
          style={{...styles.textInput,
            top: Platform.OS === 'ios' ? 0 : 2
          }}
          autoCapitalize='none'
          autoCorrect={false}
        />

        <Icon
          name='search-outline'
          color='grey'
          size={30}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
  textBackground: {
    backgroundColor: '#F3F1F3',
    borderRadius: 60,
    height: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,

    elevation: 20,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
  }
});