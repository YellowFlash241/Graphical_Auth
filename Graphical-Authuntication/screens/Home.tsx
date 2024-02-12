import React from 'react'
import { Button, Dimensions, Text, View } from 'react-native'
import auth from '@react-native-firebase/auth';

const { height, width } = Dimensions.get('window')

const Home = ({navigation}) => {

  const handleLogout = async () => {
    try {
      await auth().signOut();
      console.log('User signed out');
      navigation.navigate('Login')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{height:height,width:width,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:22,color:'black',fontWeight:'500',}}>This is the new way of graphical Authuntication</Text>
        <Button title="Log out" onPress={handleLogout} />
    </View>
  )
}

export default Home
