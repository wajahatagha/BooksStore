import { View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from 'twrnc';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import * as Icon from "react-native-feather";



const BookScreen = () => {
    const {params} = useRoute();
    let item = params; 
console.log('====================================');
console.log(item.item.item);
console.log('====================================');
    const navigation = useNavigation();
 
    return (
    <View style={tw`relative `}>
        <TouchableOpacity onPress={()=> {navigation.goBack()}} style={tw`absolute top-12 left-4 bg-gray-300 rounded-full shadow h-10 w-10`}>
        <Icon.ArrowLeft strokeWidth={3} stroke={'black'} style={tw`ml-2 mt-2`} />
        </TouchableOpacity>
         <View style={tw`shadow ml-8 shadow-lg mb-5 mt-20 h-120 w-80 items-center justify-center rounded-t-xl rounded-b-xl`}>
         <Image source={{uri:`${item.item.item.imageLink}`}} style={tw`h-90 w-60 rounded-t-3 rounded-b-3`}/>
         <View style={tw`flex-row items-center justify-center mt-2 mr-6 content-between`}>
         <Text style={tw`font-bold text-xs mr-15`}>Rating</Text>
         <Text style={tw`text-xs font-bold `}>Reviews</Text>
         <Text style={tw`text-xs font-bold pl-5`}>Price</Text>

         </View>
         <View style={tw`flex-row items-center mt-2 mr-6 content-between`}>
         
         <StarRatingDisplay
      
      rating={item.item.item.rating}
      color='orange'
      maxStars={5}
      starSize={10}
      starStyle={tw`p-0`}
      /> 
      
      <Text style={tw`text-xs text-gray-400 mr-10 ml-9`}>{`(${item.item.item.reviews})`}</Text>
      <Text style={tw`text-xs text-gray-400`}>{`$${item.item.item.price}`}</Text>
         </View> 
         </View>
         <View style={tw`relative`}>
         <View style={tw` ml-10`}>
         <Text style={tw`font-bold text-xl`}>{item.item.item.title}</Text>
         <Text style={tw`font-bold mt-5`}>Author: {item.item.item.author}</Text>
         <Text style={tw`font-bold mt-2`}>Country: {item.item.item.country}</Text>
         <Text style={tw`font-bold mt-2`}>Language: {item.item.item.language}</Text>
         <Text style={tw`font-bold mt-2`}>Year: {item.item.item.year}</Text>
         <Text style={tw`font-bold mt-2`}>Pages: {item.item.item.pages}</Text>
        <View style={tw`flex-row items-center justify-center`}>
         <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>View Details</Text>
    </TouchableOpacity>
    </View>

         </View>
         </View>

    </View>
  )
}


const styles = StyleSheet.create({
    button: {
      backgroundColor: '#000080', // Button background color
      paddingVertical: 10,
      paddingHorizontal: 110,
      borderRadius: 15,
      alignItems: 'center',
      marginRight:19,
      marginTop:7
    },
    buttonText: {
      color: 'white', // Text color
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  


export default BookScreen