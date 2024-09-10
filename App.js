import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';
import CustomNavigationBar from './components/CustomNavigationBar';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { Appbar, Menu, PaperProvider } from 'react-native-paper';


const Stack = createStackNavigator(); 

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
        initialRouteName='MD Nav Demo'
        screenOptions={{
        header: (props)=><CustomNavigationBar{...props}/>,
      }}
      >
      <Stack.Screen name="MD Nav Demo" component={HomeScreen}/>
      <Stack.Screen name="Second Screen" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>
   
  );
  
};


