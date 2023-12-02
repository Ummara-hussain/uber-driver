import { View, Text, Button } from "react-native"
import { TextInput } from "react-native-gesture-handler"

export default function SignIn({navigation}){
    return <View style={{flex: 1,justifyContent:'space-evenly' , alignItems: 'center' }}>
        {/* <Text>Dashboard</Text> */}
        <TextInput placeholder="Enter your email"/>
        <TextInput placeholder="Enter your email"/>
        <Button title='Signin'/>

        <Button title='Take a ride!' onPress={() => navigation.navigate('Pickup')} />
    </View>
}