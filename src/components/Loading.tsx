import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';

export const Loading = () => {
  return (
    <View style={ styles.activityContainer}>
        <ActivityIndicator
          size={50}
          color='grey'
        />
        <Text>Cargando...</Text>
      </View>
  );
}

const styles = StyleSheet.create({
  activityContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});