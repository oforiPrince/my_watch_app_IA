import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Carts from './screen/carts'
import Login from './screen/login'
import Home from './screen/home'
import Details from './screen/details'
import SignUp from './screen/signUp';
export default function App() {
  const MainNavigator = createNativeStackNavigator();
  return (
    <View style={{flex:1}}>
      <NavigationContainer> 
        <MainNavigator.Navigator screenOptions={{headerShown:false}} initialRouteName="Login" >
          <MainNavigator.Screen name = 'Home' component ={Home}/>
          <MainNavigator.Screen name = 'Login' component ={Login}/>
          <MainNavigator.Screen name = 'Details' component ={Details}/>
          <MainNavigator.Screen name = 'Carts' component ={Carts}/>
          <MainNavigator.Screen name = 'SignUp' component = {SignUp}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
