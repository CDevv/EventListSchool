import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();

  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='EventForm'>
          <Stack.Screen
            name='EventForm' component={EventForm} options={{ title: 'Add event' }}
          ></Stack.Screen>
          <Stack.Screen
            name='EventList' component={EventList} options={{ title: 'Events' }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
