import React, { useState } from 'react'
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { data1 } from '../imgdata/data';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';



const Flatimg = ({ navigation }) => {

    const pushdata = () => {
        const user = auth().currentUser;
        const userId = user?.uid;
        const userRef = database().ref(`users/${userId}`);
        userRef.push(concatenatedIds);
        if(concatenatedIds.length==4){
            navigation.navigate('Home')
        }
        else{
            Alert.alert('Enter Pattern')
        }
    }

    const [concatenatedIds, setConcatenatedIds] = useState('');

    const idappend = (id: any) => {
        if (!concatenatedIds.includes(id.toString())) {
            if (concatenatedIds.length > 5) {
                setConcatenatedIds(id.toString());
            } else {
                setConcatenatedIds((prevIds) => prevIds + id.toString());
            }
        }
        console.log(concatenatedIds)


    };


    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                data={data1}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => idappend(item.id)}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
            <TouchableOpacity onPress={() => setConcatenatedIds('')}>
                <View style={styles.resetview}>
                    <Text style={styles.reset}>reset</Text>
                </View>
            </TouchableOpacity>
            <Text style={{ color: 'black' }}>{concatenatedIds}</Text>
            <TouchableOpacity onPress={pushdata}>
                <View style={styles.button}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Continue</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    item: {
        marginRight: 20,
        marginBottom: 20,
        borderRadius: 8

    },
    image: {
        height: 148,
        width: 148,
        borderRadius: 8

    },
    reset: {
        color: 'black',
        fontSize: 16,
        fontWeight: '500'

    },
    resetview: {
        backgroundColor: '#66C565',
        height: 30,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        opacity: 0.8,
        alignSelf: 'flex-end'
    },
    button:{
        backgroundColor:'#66C565',
        height:53,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:4,
        marginTop:60
    }
});
export default Flatimg
