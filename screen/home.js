import React from 'react';
import { StyleSheet, Text,Image, View, SafeAreaView, TouchableOpacity, FlatList, Dimensions, ScrollView, StatusBar } from 'react-native';

import styles from './styles.js'

import watches from '../assets/consts/watches'

import { Ionicons, FontAwesome, AntDesign,MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
const home =({navigation}) => {
  var [cart, updateCart] = React.useState([]);
  var [totalCart, updateNumber] = React.useState(0);
  var [totalPrice, updateTotalPrice] = React.useState(0);

    const categories = [' Men','Women', 'Men & Women',];
    const [categoryIndex, setCategoryIndex] = React.useState(0);

    const CategoryList = () =>{
        return <View style={{flexDirection:'row', marginTop:10, marginBottom:5,justifyContent:'space-between',}}>
            {categories.map((item,index) => (
                    <View key={index} style={{backgroundColor:'#f6f6f6', borderRadius:8,}}>
                         <TouchableOpacity onPress={(key)=>setCategoryIndex(index)} >
                        <Text  style={{fontWeight:'bold',padding:8, color:'#bdbdbd',fontSize:15}}
                        >{item}</Text>
                        </TouchableOpacity>
                    </View>
            ))}
        </View>;
    }

    const WatchList = ({watch}) =>{
      //const watch = props.watches;
      return(
      <SafeAreaView style={styles.container}>
      <TouchableOpacity
         onPress={()=>navigation.navigate("Details", watch)}

      >
       <View style={{alignItems:'flex-end'}}>
           <View style={{width:30,
                        height:30,
                        borderRadius:10, 
                        alignItems:'center',
                        justifyContent:'center',
                        backgroundColor:watch.like ? 'rgba(245,42,42,0.2)': 'rgba(0,0,0,0.2)'}}>
               <MaterialIcons name='favorite' size={19} color={watch.like? 'red':'black'}/>
           </View>
       </View>
      <View style={styles.img}>
      <Image
       style = {styles.image}
       source= {watch.img}
      />
      </View> 
      <Text style={styles.watchName}>
           {watch.gender}
      </Text>
      <View style={styles.price_add}>
      <Text>
        {watch.currency}
      </Text>
      <Text style={styles.price}>
          {watch.price}
      </Text>
      </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          backgroundColor: "#f07e05",
          borderRadius: 10,
          padding: 4,
          alignItems: "center",
          justifyContent: "center",
          //marginTop: 10,
          flexDirection: "row",
          marginTop:-4
        }}
        onPress={() => {
          updateNumber((totalCart -= 1));
          updateCart(cart.filter((product) => product !== item));
        }}>
          <AntDesign
            name="plus"
            size={19}
            color="white"
            style={{ paddingHorizontal: 10 }}
          />
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Add to Cart
          </Text>
      </TouchableOpacity>
      
      
    </SafeAreaView>
    )
    }


    return (
    <View style={{backgroundColor:'white', paddingTop:10,  flex:1, paddingHorizontal:10,marginTop:20,}}>
      <SafeAreaView style={{ flexDirection:'row', justifyContent:'space-between',alignItems:'center', marginBottom:15, backgroundColor:'white',}}>
        <Ionicons name="settings-outline" size={27} color="black" />
      {/*<View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        {/*<AntDesign name="search1" size={24} color="black" />
        <FontAwesome name="user-circle-o" size={24} color="black" />
      </View>*/}
        <TouchableOpacity
        //onPress={() => navigation.navigate("Cart", { cart })}
        style={{
          height: 40,
          width: 50,
          backgroundColor: "white",
          borderRadius: 35,
          position: "absolute",
          right: 0,
          
        }}
        onPress={()=>navigation.navigate("Carts", {cart})}
      >
        <View
          style={{
            height: 20,
            width: 20,
            backgroundColor: "orange",
            borderRadius: 10,
            position: "absolute",
            right: 0,
            elevation: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "red" ,fontWeight:'bold'}}>{cart.length}</Text>
        </View>

        <AntDesign
          style={{ alignSelf: "center", top: 15 }}
          name="shoppingcart"
          size={24}
          color="black"
        />
      </TouchableOpacity>
      </SafeAreaView>

      

      <View >
        <View style={{flexDirection: 'column', marginBottom:10}}>
            <Text style={{fontSize:23,  fontWeight:'bold', color:'#bdbdbd'}}>Discover Our exclusive</Text>
            <Text style={{color:'orange', fontSize:23,  fontWeight:'bold'}}> watches</Text>
        </View>
        <Text style={{fontWeight:'bold',fontSize:20}}>Categories</Text>
        <View>
            <CategoryList/>
        </View>
      {/*<ScrollView>
        <watch watch={watch1}/>
        <watch watch={watch2}/>
        <watch watch={watch3}/>
        <watch watch={watch4}/>
      </ScrollView>
      */}
      <View style={{height:'80%'}}>
        <FlatList 
        columnWrapperStyle={{justifyContent: 'space-between'}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          marginTop:10,
          paddingBottom:50,
        }}
        numColumns={2}
        key = {({item}) => item.id}
        data={watches} 
        renderItem={({item, index}) => 
        (
          <SafeAreaView style={styles.container}>
          <TouchableOpacity
             onPress={()=>navigation.navigate("Details", item)}
    
          >
           <View style={{alignItems:'flex-end'}}>
               <View style={{width:30,
                            height:30,
                            borderRadius:10, 
                            alignItems:'center',
                            justifyContent:'center',
                            backgroundColor:item.like ? 'rgba(245,42,42,0.2)': 'rgba(0,0,0,0.2)'}}>
                   <MaterialIcons name='favorite' size={19} color={item.like? 'red':'black'}/>
               </View>
           </View>
          <View style={styles.img}>
          <Image
           style = {styles.image}
           source= {item.img}
          />

          </View> 
          <Text style={styles.watchName}>
               {item.gender}
          </Text>
          <View style={styles.price_container}>
          <Text style={styles.currency}>
            {item.currency}
          </Text>
          <Text style={styles.price}>
              {item.price}
          </Text>
          {/*<View style={styles.add_container}>
           <Text style={styles.add_sign}>+</Text>
          </View>*/}
          </View>
          </TouchableOpacity>
          {cart.includes(item) ? (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={{
                      backgroundColor: "#bdbdbd",
                      borderRadius: 5,
                      padding: 4,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: -4,
                      flexDirection: "row",
                    }}
                    onPress={() => {
                      updateNumber((totalCart -= 1));

                      updateCart(cart.filter((product) => product !== item));
                    }}
                  >
                    
                    <View
                      style={{
                        height: 20,
                        width: 20,
                        borderRadius: 10,
                        backgroundColor: "red",
                        alignItems: "center",
                        justifyContent: "center",
                        marginHorizontal: 20,
                      }}
                    >
                      <AntDesign name="minus" size={18} color="white" />
                    </View>
                    <Text style={{ fontWeight: "bold" }}>Added</Text>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    style={{
                      backgroundColor: "#f07e05",
                      borderRadius: 5,
                      padding: 4,
                      alignItems: "center",
                      justifyContent: "center",
                      //marginTop: 10,
                      flexDirection: "row",
                      marginTop:-4
                    }}
                    onPress={() => {
                      

                      updateCart([...cart, item]);
                    }}
                  >
                    <AntDesign
                      name="plus"
                      size={19}
                      color="white"
                      style={{ paddingHorizontal: 10 }}
                    />
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      Add to Cart
                    </Text>
                  </TouchableOpacity>
                )}
          
          
          
        </SafeAreaView>

        )}
        />
      </View>       
      </View>
      <StatusBar style='auto'/>
    </View>
    
    
    

  );
}

const style = StyleSheet.create({
    categoryText:{
        backgroundColor:'#f6f6f6',
        borderRadius:7,
        
    },
    categorySelected:{
        color:'orange',
        backgroundColor:'green'
    }
  
});

export default home;