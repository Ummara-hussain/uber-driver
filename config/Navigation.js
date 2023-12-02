import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SignIn from '../screens/SignIn';
import Pickup from '../screens/Pickup';
import Destination from '../screens/Destination';
import CarSelection from '../screens/CarSelection';

import Ride from '../screens/Ride';
import Dashboard from '../screens/Dashboard';

const Stack = createStackNavigator();


export default function MainNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Dashboard'>
                <Stack.Screen name='Dashboard' component={Dashboard} />
                <Stack.Screen name='Ride' component={Ride} />
                {/* <Stack.Screen name="SigIn" component={SignIn} />
                <Stack.Screen name="Pickup" component={Pickup} />
                <Stack.Screen name="Destination" component={Destination} />
                <Stack.Screen name="Select your Ride" component={CarSelection} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}