import { View, Text, TextInput, Image, SafeAreaView } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { useState,memo } from 'react';
import * as Icon from "react-native-feather"
import BookCard from '../components/BookCard';
import { ScrollView } from 'react-native-gesture-handler';

import { useSelector, useDispatch } from 'react-redux';

const Home = () => {

const [text, setText] = useState("")
const books = useSelector((state) => state.books.books) 

  return (
    <>
    
     <View>
    <SafeAreaView style={tw`flex-row pt-18 justify-between`}> 
      <Text style={tw`text-lg font-bold items-start ml-4`}>Hi Nick, </Text>
      <View style={tw` flex-row items-center bg-gray-300  rounded-full h-10 w-60 mt-15`}>
      <Icon.Search height={25} width={25} stroke={'black'} style={{marginLeft:5}}/>
      <TextInput style={tw`flex-1 ml-2 text-gray-600`} onChangeText={(event)=>    
        
        
        
        setText(event.target)} 
        
        
        value= {text}  />
        
      </View> 
      <Image source={require("../assets/Nick.jpeg")} style={tw`items-end mr-3 h-12 w-12 rounded-full`} />


    </SafeAreaView>
    
    
    <View style={{marginTop:10}}>
    <BookCard />
    </View>
    </View>
    
    
      
    </> 
  )
}

export default Home