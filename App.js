import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from './EventForm';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='EventList'>
        <Stack.Screen
          name='EventList' component={EventList} options={{title: 'Events'}}
        ></Stack.Screen>
        <Stack.Screen
          name='EventForm' component={EventForm} options={{title: 'Add event'}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
/*
<NavigationContainer>
      <Stack.Navigator initialRouteName='EventList'>
        <Stack.Screen
          name='EventList' component={EventList} options={{title: 'Events'}}
        ></Stack.Screen>
        <Stack.Screen
          name='EventForm' component={EventForm} options={{title: 'Add event'}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
*/
