import React from "react";
import Lottie from "lottie-react-native";
import {View, Text, StatusBar, FlatList, Image, ActivityIndicator,SafeAreaView,ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useState } from "react";

import styles from './styles.js'

const Cart = ({ navigation, route }) => {
  const [cart, setCart] = React.useState([...route.params.cart]);
  const [loading, setLoading] = React.useState(false);

  let lottieRef = null;

  React.useEffect(() => {
    if (lottieRef !== null) lottieRef.play();
  });

  function getTotalPrice() {
    let price = 0.0;
    for (var i = 0; i < cart.length; i++) {
      price += cart[i].price;
    }
    return price;
  }
  return (
    <View style={{ paddingHorizontal: 20, flex: 1,marginTop:18,backgroundColor:'#F3E6DE' }}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Text
        style={{ textAlign: "center", fontSize: 25,fontWeight:'bold' }}
      >
        <Text style={{ color: "orange" }}>My</Text> Shopping Cart
      </Text>

      {route.params.cart.length == 0 ? (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Lottie
            ref={(lottie) => (lottieRef = lottie)}
            style={{ height: 200, width: 200 }}
            source={require("../assets/animation/4495-shopping-basket.json")}
          />
          <Text style={{ fontSize: 18 }}>
            Your Cart is Empty 😥
          </Text>
        </View>
      ) : (
        <View>
          <View style={{height:'75%'}}>
          <FlatList
            style={{ paddingVertical: 10 }}
            data={cart}
            renderItem={({ item, index }) => (
              <View
                  style={{
                    flex:1,
                    margin: 5,
                    padding: 5,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "#fafafa",
                    borderRadius: 10,
                  }}>
                <Image
                style={{ height: 100, width: 100, resizeMode:'contain' }}
                source= {item.img}/>
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                  <Text style={styles.watchName}>
                      {item.gender}
                  </Text>
                  <View style={styles.price_container}>
                  <Text style={styles.price}>
                      {item.price}
                  </Text>
                  </View>
                </View>
              </View>
            )}/>
          </View>
          <View
            style={{
              borderWidth: 2,
              borderColor: "orange",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              borderRadius:10,
              marginBottom: 10
            }}
          >
            <Text style={{  fontSize: 24 }}>
              {" "}
              Total ITems: {route.params.cart.length}
            </Text>
            <Text style={{ fontSize: 24 }}>
              {" "}
              <Text style={{ color: "orange" }}>GH¢</Text>
              {getTotalPrice().toFixed(2)}
            </Text>
          </View>

          <TouchableOpacity
            disabled={loading ? true : false}
            style={{ backgroundColor: "#f07e05", marginHorizontal:100,padding:10,borderRadius:10 }}
            activeOpacity={0.8}
            onPress={() => {
              navigation.navigate('Home')
              setLoading(!loading);
            }}
          >
            {!loading ? (
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 20,
                }}
              >
                Checkout
              </Text>
            ) : (
              <ActivityIndicator color="white" />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

export default Cart;