import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Flatcheckimg from '../components/Flatimgcheck'

const { height, width } = Dimensions.get('window')

const Checkpattern = ({navigation}) => {
  return (
    <View style={{height:height,width:width,backgroundColor:'white',padding:20,}}>
    <Text style={styles.txt}>Enter Your Pattern</Text>
    <Text style={styles.txt1}>Click on the photos in the order</Text>
    <Flatcheckimg navigation={navigation}></Flatcheckimg>
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

export default Checkpattern
