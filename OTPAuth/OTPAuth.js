import React from 'react'
import {View,Text,Image} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class OTPAuth extends React.Component{
    static navigationOptions = {
        title: 'OTP Auth',
        drawerIcon: ({ tintColor }) => (
            <Icon name="lock" size={26} color="#6600cc" />
        ),

    };
    render(){
        return(
            <View>
                <Text>Map</Text>
            </View>
        )
    }
}