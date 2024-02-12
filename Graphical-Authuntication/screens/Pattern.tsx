import React from 'react'
import database from '@react-native-firebase/database';
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Flatimg from '../components/Flatimg'

import auth from '@react-native-firebase/auth';


const { height, width } = Dimensions.get('window')

const Pattern = ({navigation}) => {
    
  return (
    <View style={{height:height,width:width,backgroundColor:'white',padding:20,}}>
    <Text style={styles.txt}>Choose your new pattern</Text>
    <Text style={styles.txt1}>Click on the photos in a particular order and remeber it in the next time you sign in </Text>
    <Flatimg navigation={navigation} ></Flatimg>
    </View>
  )
}
 
const styles=StyleSheet.create({
    txt:{
        fontSize:32,
        fontWeight:'bold',
        color:'black',
        marginTop:20
    },
    txt1:{
        fontSize:15,
        color:'black',
        marginTop:10
    },
    button:{
        backgroundColor:'#66C565',
        height:53,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        marginTop:60
    }

})

export default Pattern
