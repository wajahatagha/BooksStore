import { View, Text, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useEffect } from 'react';

const Welcome = ({navigation}) => {
    
    
    useEffect(() => {
      setTimeout(()=> navigation.navigate('Home'),3000)
    }, [])
    
  return (
    <View style={tw`flex-1 items-center justify-center bg-white` }>
      <Image source={require('../assets/logo.jpg')} style={tw`h-100 w-100`} />
      
    </View>
  )
}

export default Welcome