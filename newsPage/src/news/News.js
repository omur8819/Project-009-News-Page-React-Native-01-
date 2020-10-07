import React from 'react'
import { View, Text,StyleSheet,Image,Dimensions } from 'react-native'

const News = ({ data }) => {
    
    return (
        <View style={styles.container}>
            <Image style={styles.image}  source={{uri: data.imageUrl}}/>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.desc}>{data.description}</Text>
        </View>
    )
}
const styles=StyleSheet.create({
   container:{
        flex: 1,
        padding: 10,
        margin: 15,
        borderWidth: 5,
        borderColor: 'wheat',
        borderRadius: 10,
   } ,
   image: {
        height: Dimensions.get('window').width * 0.85,
        borderRadius: 5
    },
    title: {
        fontWeight: 'bold',
        marginVertical: 3,
        fontSize: 25
    },
    desc:{
        fontSize: 16
    }
})
export { News };
