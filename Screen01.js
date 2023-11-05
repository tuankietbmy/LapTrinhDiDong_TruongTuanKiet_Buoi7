import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View,Image, Button } from 'react-native';

export default function Screen01({navigation}) {
  var [data,setData] =useState([]);
  useEffect(()=>{
    fetch('https://653f4fde9e8bd3be29e03c12.mockapi.io/shops')
      .then((response) => response.json())
      .then((json) => setData(json))
  },[]);
  return (
    <View style={styles.container}>
      <Text style={{textAlign:'center',marginTop:50,fontSize:20,fontWeight:'bold'}}>Welcome to Cafe word</Text>
      {
        data.map((item)=>{
          return (
            <View style={{alignItems:'center'}}>
                <Image style={{marginTop:80,width:200,height:62}} source={{uri:item.img}}/>
            </View>
          )
        })
      }
      <View style={{marginTop:200,alignSelf:'center',width:'80%'}}>
        <Button onPress={() => navigation.navigate('Screen02')} style={{width:90,height:90}} title='Get Started'/>  
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
