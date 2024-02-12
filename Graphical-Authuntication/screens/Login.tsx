import React, { useState } from 'react'
import { Alert, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import auth from "@react-native-firebase/auth";


const { height, width } = Dimensions.get('window')

const Login = ({navigation}) => {

  const [emailID, setemailID] = useState('')
  const [password, setpassword] = useState('')


  const __doSignupUser = async () => {
    try {
      if (emailID.length > 0 && password.length > 0) {
        let response = await auth().signInWithEmailAndPassword(
          emailID,
          password
        )
        if (response && response.user) {
          Alert.alert("Success ✅", "Authenticated successfully")
        }
        navigation.navigate('Cpattern')
      }
      else {
        Alert.alert('Check',"No inputs")
      }
    }
    catch (err) {
      Alert.alert("Error",'Check you inputs')

    }

  }
  
  return (
    <View style={{height:height,width:width,backgroundColor:'white',padding:20,}}>
    <Text style={styles.text}>Log in</Text>
    <Text style={{color:'black',fontSize:18}}>A New way of authentication</Text>

    <View style={{flexDirection:'row',backgroundColor:'#E9F0F3',paddingLeft:10,borderRadius:4,marginTop:50,height:50}}>
      <Image source={require('/home/tarun/MAckerz/images/email.png')} 
      style={{height:20,width:20,alignSelf:'center'}}></Image>
      <TextInput placeholder='Enter your e-mail' placeholderTextColor={'black'}  style={styles.txtinp} textAlign="left" value={emailID}
          onChangeText={(text) => setemailID(text)}> 
      </TextInput>
    </View>
    
    <View style={{flexDirection:'row',backgroundColor:'#E9F0F3',paddingLeft:10,borderRadius:4,marginTop:15,height:50}}>
      <Image source={require('/home/tarun/MAckerz/images/padlock.png')} 
      style={{height:20,width:20,alignSelf:'center'}}></Image>
      <TextInput placeholder='Password' placeholderTextColor={'black'}  style={styles.txtinp} textAlign="left" value={password}
          onChangeText={(text) => setpassword(text)}> 
      </TextInput>
    </View>

    <TouchableOpacity onPress={__doSignupUser}>
      <View style={{height:50,backgroundColor:'#66C565',alignItems:'center',justifyContent:'center',borderRadius:4,marginTop:20}}>
        <Text style={{color:'white'}}>Log in</Text>
      </View>
    </TouchableOpacity>

    <View style={{flexDirection:'row',marginTop:5}}>
      <Text style={{fontWeight:'400',color:'black'}}>Not member yet?</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')} >
        <Text style={{textDecorationLine: 'underline',fontWeight:'bold',color:'black'}}>Create an account</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

const styles=StyleSheet.create({
  text:{
    fontSize:32,
    color:'black',
    fontWeight:'bold',
    marginTop:30
  },
  txtinp:{
    flex:1,
    paddingLeft:11,
    color:'black'
  },


})

export default Login
