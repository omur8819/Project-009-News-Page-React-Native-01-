import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity,FlatList,Image } from 'react-native';
import { News } from './News';
import { data } from './data';

const TravelNews=()=>{
    const renderNews=({ item })=><News data={ item }/>;
    return(
        <FlatList
            ListHeaderComponent={() => <Text style={styles.header}>Travel News</Text>}
            renderItem={ renderNews }
            data={ data }
            ListHeaderComponentStyle={{margin:30}}
        />     
       
    ) 
}
const styles = StyleSheet.create({
    header: {
        fontSize: 50, 
        fontWeight: 'bold', 
        textAlign: 'center', 
        borderWidth: 5, 
        borderRadius: 15, 
        color: 'wheat', 
        borderColor: 'wheat',
    },
  });
export default TravelNews;