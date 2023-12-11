import { useEffect, useState } from 'react'
import { View, Text, Button, StyleSheet, Pressable } from 'react-native'
import { collection, query, where, onSnapshot, db, updateStatus } from '../config/firebase'

export default function Dashboard({ navigation }) {
    const [rides, setRides] = useState([])

    useEffect(() => {
        renderRides()
    }, [])

    const renderRides = async () => {
        const q = query(collection(db, "rides"), where("status", "==", "pending..."));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const tempRides = [];
            querySnapshot.forEach((doc) => {
                tempRides.push({ id: doc.id, ...doc.data() });
            });
            console.log(tempRides)
            setRides(tempRides)
        });
    }

    console.log('rides', rides)


    return <View style={styles.container}>
        <Text style={styles.title}>Driver</Text>

        {rides.map(item => {
            return <View style={styles.rides}>
                <Text style={styles.text}>Pickup Location:{item.pickup.name}</Text>
                <Text style={styles.text}>Destination Location:{item.destination.name}</Text>
                <Text style={styles.text}>Ride:{item.rideType}</Text>
                <Text style={styles.text}>Fare: Rs.{Math.round(item.fare)}</Text>
                <Pressable style={styles.button} onPress={() => {
                    updateStatus(item.id, 'accepted')
                    navigation.navigate('Ride', item)
                }} ><Text style={styles.text}>Accept</Text></Pressable>
                <Pressable style={styles.button} color='red' title='Reject' onPress={() => {
                    updateStatus(item.id, 'rejected')
                }} ><Text style={styles.text}>Decline</Text></Pressable>

            </View>
        })}
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // justifyContent: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 30,
        padding: 2,
        textAlign: 'center',
        margin: 1,
        color: 'white',
        fontWeight: 'bold'
    },
    text: {
        color: 'white',
        fontSize: 17
    },
    rides: {
        borderStyle: 'dotted',
        borderWidth: 2,
        margin: 3,
        padding: 10,
        height: '29%',
        borderColor: 'white',
    },
    button: {
        borderColor: 'white',
        // backgroundColor:'grey',
        width: 100,
        borderWidth: 1,
        height: 30,
        margin:4,
        marginLeft:100,
        paddingLeft: 19,
    }

})