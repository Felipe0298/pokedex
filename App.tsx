import 'react-native-gesture-handler';
import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'


const App = () => {
  return (
    <>
      <Text>App</Text>
      <Icon
        name='star-outline'
        color='red'
        size={100}
      />
    </>
  );
}

export default App