import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
const width = Dimensions.get("screen").width/2-30


const styles = StyleSheet.create({
    container:{
        /*margin:5,
        backgroundColor:'#f6f6f6',
        borderRadius: 20,
        marginBottom: 20,
        padding: 10,
        marginTop: 10,
        paddingBottom: 30,
        */
       height:210,
       backgroundColor:'#F3E6DE',
       width,
       marginHorizontal:5,
       borderRadius:10,
       marginBottom:20,
       padding:10
    },
    img:{
        height:110,
        alignItems:'center',
    },
    image:{
        flex:1,
        resizeMode: 'contain',    
    },
    watchName:{
        fontWeight:'bold',
        fontSize:17,
        textAlign:'center',
    },
    price_container:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center',
        paddingBottom:5,
        justifyContent:'center'
    },
    currency:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    price:{
        fontSize:15,
        fontWeight:'bold',
        textAlign:'center'
    },
    add_container:{
        height:22,
        width:22,
        backgroundColor:'orange',
        justifyContent:'center',
        alignItems:'center',
    },
    add_sign:{
        fontSize:20,
        color:'white',
        fontWeight:'bold',
    }
})

export default styles;
