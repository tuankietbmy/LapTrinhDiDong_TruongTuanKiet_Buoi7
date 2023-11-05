import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
export default function Screen02({navigation}) {
    var [data,setData] =useState([]);
    useEffect(()=>{
    fetch('https://653f4fde9e8bd3be29e03c12.mockapi.io/shops2')
      .then((response) => response.json())
      .then((json) => setData(json))
  },[]);
  return(
    <View style={{flex:1}}>
        <View style={{display:'flex',flexDirection:"row",marginBottom:30}}>
            <Image style={{width:44,height:44,marginLeft:7}} source={require("./assets/Button 70.png")}/>
            <Text style={{fontSize:24, fontWeight:'bold',marginTop:4,marginLeft:7,}}>Shop Near Me</Text>
            <Image style={{width:24,height:24,marginTop:12,marginLeft:100}} source={require("./assets/Image 177.png")}/>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Screen03')}>
        {
            data.map((item)=>{
                return (
                  <View style={{alignItems:'center'}}>
                        <Image style={{width:347,height:150}} source={{uri:item.img}}/>
                  </View>
                )
              })
        }</TouchableOpacity>
    </View>
  );
}