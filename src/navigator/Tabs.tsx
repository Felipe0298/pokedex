import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Navigator } from './Navigator';
import { SearchScreen } from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white'
      }}
      screenOptions={{
        tabBarActiveTintColor: '#5856D5',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.82)',
          paddingBottom: 10, //( Platform.OS === 'ios') ? 0 : 10, 
          borderWidth: 0,
          elevation: 0,
          height: 60,//( Platform.OS === 'ios') ? 70 : 80,
        }
      }}
    >
      <Tab.Screen name="HomeScreen" component={Navigator}
      
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({ color }) => (
            <Icon color={color}
              size={20}
              name='list-outline'
            />
          ),
          headerShown: false
        }}
      />
      <Tab.Screen name="SearchScreen" component={SearchScreen}
        options={{
          tabBarLabel: 'Busqueda',
          tabBarIcon: ({ color }) => (
            <Icon color={color}
              size={20}
              name='list-outline'
            />
          ),
          headerShown: false
        }} />
    </Tab.Navigator>
  );
}