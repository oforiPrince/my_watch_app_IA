import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const login =({navigation})=> {

  return (
    <View style={styles.container}>
    <ImageBackground source={require('../assets/images/login_bg_image1.png')} resizeMode="cover" style={{flex:1,width: undefined, height: undefined}}>
      <View style={{flex:1, justifyContent:'center', alignItems:'center',backgroundColor:'rgba(0,0,0,0.5)' }}>
      <View style={{alignItems:'center',justifyContent:'center'}}>
      <Text style = { {fontSize:25, color:'rgb(255,255,255)',fontWeight:"600"}}>
         Welcome to
       </Text>
       <Text style = { {color:'white', fontSize:25, fontWeight:"600"}}>
         Amazing Watches
       </Text>
       </View>
       <TouchableOpacity
        onPress ={() =>{
          navigation.navigate('Home')
        }}
        style={{backgroundColor:"#e3e3e3", 
        padding:10,paddingHorizontal:48,
        marginTop:20,borderRadius:10, 
        flexDirection:"row", 
        alignItems:"center"}}>
          <AntDesign name="google" size={24} color="red" />
         <Text style={{fontSize:18, marginLeft:10}}>Login with Gmail</Text>
       </TouchableOpacity>
       <TouchableOpacity 
       onPress ={() =>{
        navigation.navigate('Home')
      }}
       style={{backgroundColor:"black", 
       padding:10,
       paddingHorizontal:48,
       marginTop:20,
       borderRadius:10, 
       flexDirection:"row",
       alignItems:"center"}}>
       <AntDesign name="apple1" size={24} color="white" />
         <Text style={{fontSize:18, color:'white', marginLeft:10}}>Login with Apple</Text>
       </TouchableOpacity>
       <View style={{flexDirection:'row'}}>
        {/*<Text style={{color:"white",fontWeight:'500',marginTop:10 }}>Not a member?</Text>*/}
        <TouchableOpacity 
        onPress ={() =>{
          navigation.navigate('SignUp')
        }}
        >
        <Text style={{color:"white",fontWeight:'bold',marginTop:10 }}> SignUp</Text>
        </TouchableOpacity>
       </View>
      </View>
    </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:20,
    
  },
  image: {
    justifyContent: "center"
  },
});

export default login;