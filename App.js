import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Catalogue from './screen/catalogue';
import Detail from './screen/detail';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';

export default function App() {
  return (
    <AppContainer/>
  );
}

const StackNavigator=createStackNavigator({
  Home:{screen:Catalogue,navigationOptions:{headerShown:false}},
  Detail:{screen:Detail}

},
{initialRouteName:"Home"}
)
const AppContainer=createAppContainer(
  StackNavigator
)



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
