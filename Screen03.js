import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Button, TouchableOpacity } from 'react-native';
export default function Screen03({navigation}) {
  return(
    <View style={{flex:1}}>
        <View style={{display:'flex',flexDirection:"row",marginBottom:30}}>
            <Image style={{width:44,height:44,marginLeft:7}} source={require("./assets/Button 70.png")}/>
            <Text style={{fontSize:24, fontWeight:'bold',marginTop:4,marginLeft:7,}}>Drinks</Text>
            <Image style={{width:24,height:24,marginTop:12,marginLeft:200}} source={require("./assets/Image 177.png")}/>
        </View>
        <View style={{marginTop:200,alignSelf:'center',width:'90%'}}>
        <TouchableOpacity  style={{width:'95%',height:40,backgroundColor:'yellow'}}>
            <Text style={{textAlign:'center',marginTop:1,fontSize:25,color:'white'}}>GO TO CARD</Text>
        </TouchableOpacity> 
        </View>
    </View>
  );
}