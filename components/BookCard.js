import React, { useEffect, useState, memo } from 'react';
import { View, Text, ActivityIndicator,Image, Touchable, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks } from '../actions/booksActions';
import { ScrollView } from 'react-native-gesture-handler';
import tw from 'twrnc';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { useNavigation } from '@react-navigation/native';



const BookCard = () => {
    const navigation = useNavigation();
  const dispatch = useDispatch();

   const books = useSelector((state) => state.books.books) 
   const [isLoading, setisLoading] = useState(false)

   useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  
  useEffect(() => {
    if (books.data !== undefined) {
      setisLoading(true);
    }
  }, [books.data]);
 
//const [title,author] = books.data; 

// console.log('====================================');
// console.log("Data is HERE",books.data);
// console.log('====================================');




  return (
    
isLoading==false ?( <ActivityIndicator size="large" color="red"  />) :
   
<FlatList 

data={books.data}
renderItem={function RenderItem(item) {
    
    return(
        
       

    <View style={styles.container}>
      <TouchableOpacity onPress={()=> navigation.navigate('BookScreen', {item})}>
         <Image source={{uri:`${item.item.imageLink}`}} style={tw`h-60 w-40 rounded-t-3 rounded-b-3`}/>
      </TouchableOpacity>
      
      <Text style={tw`font-bold mt-2`}>{item.item.title}</Text>
      
      <View  style={tw`flex-row items-center mt-2 `}>
      <StarRatingDisplay
      
      rating={item.item.rating}
      color='orange'
      maxStars={5}
      starSize={10}
      
      /> 
      <Text style={tw`text-xs text-gray-400`}>{`(${item.item.reviews})`}</Text>
      </View>
      <View style={tw`flex-row items-start`} >
      <Text style={tw`font-bold mt-2`}>{`$${item.item.price}`}</Text>
      </View>
    </View>
    ) 
 }} 

// keyExtractor={(item)=>item.index}
maxToRenderPerBatch={7}
//updateCellsBatchingPeriod={50}
numColumns={2}






/>



// books.data.map((item,index)=>{
    //     return(
    //         <View key={index} style={styles.container}>
    //          <View style={styles.row}>   
    //           <View style={styles.column}>
    //            <TouchableOpacity >
    //             <Image source={{uri: `${item.imageLink}`}} style={tw`h-30 w-30`}/>
    //            </TouchableOpacity>
    //           </View>
    //           </View> 
    //         </View>
    //     )
    // })
      
    //   <View>
    //     <Text>
    //         wqff
    //     </Text>
    //   </View>

    
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 13,
     
      marginTop:10
    },
    row: {
      flexDirection: 'row',
      marginBottom: 16,
    },
    column: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 1,
      borderColor: 'black',
      padding: 16,
    },
  });

export default memo(BookCard);
