import React from 'react';
import { View,Image, Text,TouchableOpacity, SafeAreaView, } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {AntDesign} from 'react-native-vector-icons'

const detailScreen = ({navigation, route}) =>{
    const watch = route.params;
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'white',paddingHorizontal:10,marginTop:20,}}>
            <View style={{
                //paddingHorizontal:20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
                marginTop:10,
            }}>
                <Icon name='arrow-back' size={26} onPress={() =>navigation.goBack()}/>
                <TouchableOpacity
        //onPress={() => navigation.navigate("Cart", { cart })}
        style={{
          height: 40,
          width: 50,
          //backgroundColor: "white",
          borderRadius: 35,
          position: "absolute",
          right: 0,
          //margin: 15,
        }}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "#f07e05",
            borderRadius: 10,
            position: "absolute",
            right: 0,
            elevation: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white" }}>0</Text>
        </View>

        <AntDesign
          style={{ alignSelf: "center", top: 15 }}
          name="shoppingcart"
          size={24}
          color="#f07e05"
        />
      </TouchableOpacity>
            </View>
            
            <View style={{flex:0.45,marginTop:10,justifyContent:'center',alignItems:'center',padding:10}}>
                <Image source={watch.img} style={{resizeMode:'contain',flex:1}}/>
            </View >
            <View style={{flex:0.45,backgroundColor:'#F3E6DE', marginBottom:7, borderRadius:20, marginTop:20,paddingTop:30}}>
            </View>
            <TouchableOpacity>
                <View style={{alignItems:'center',justifyContent:'center', flexDirection:'row',paddingVertical:10}}>
                <Text style={{fontSize:17, fontWeight:'bold'}}>
                    Add to Cart -
                </Text>
                <Text style={{fontSize:17, fontWeight:'bold'}}>
                      {watch.price}
                </Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default detailScreen;