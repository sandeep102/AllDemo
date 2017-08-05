import React from 'react'
import {View,Text,Image} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class FbAuth extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'FbAuth',
        tabBarIcon: ({ tintColor }) => (
            <Icon name="lock" size={26} color="#a6a6a6"  />
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