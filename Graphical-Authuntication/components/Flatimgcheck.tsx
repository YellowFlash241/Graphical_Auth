import React, { useState } from 'react'
import { Alert, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { data1 } from '../imgdata/data';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import { shuffle } from 'lodash';
const shuffledData = shuffle(data1);

const Flatcheckimg = ({ navigation }) => {

    const [checkIds, setcheckIds] = useState('');

    const idappend = (id: any) => {
        if (!checkIds.includes(id.toString())) {
            if (checkIds.length > 5) {
                setcheckIds(id.toString());
            } else {
                setcheckIds((prevIds) => prevIds + id.toString());
            }
        }
    };

    const fetchdata = () => {
        const user = auth().currentUser;
        const userId = user?.uid;
        const userRef = database().ref(`users/${userId}`);
        userRef.once('value', snapshot => {
            const userData = snapshot.val();
            const items = Object.values(userData);
            console.log(items)
            console.log(checkIds)
            if(items[0]==checkIds){
                navigation.navigate('Home')
            }
            else{
                Alert.alert('Wrong Pattern','Check your pattern')
                setcheckIds('')
            }
        })
    }

   

    return (
        <View style={{ marginTop: 40 }}>
            <FlatList
                data={shuffledData}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.item} onPress={() => idappend(item.id)}>
                        <Image source={item.image} style={styles.image} />
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
            />
            {/* <TouchableOpacity onPress={() => setcheckIds('')}>
                <View style={styles.resetview}>
                    <Text style={styles.reset}>reset</Text>
                </View>
            </TouchableOpacity> */}
            <Text style={{ color: 'black' }}>{checkIds}</Text>
            {/* <TouchableOpacity onPress={fetchdata}>
                <View style={styles.resetview}>
                    <Text style={styles.reset}>fetchdata</Text>
                </View>
            </TouchableOpacity> */}
            <TouchableOpacity onPress={fetchdata}>
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
    button: {
        backgroundColor: '#66C565',
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        marginTop: 60
    }
});
export default Flatcheckimg
