import React from 'react'
import {View,Image} from 'react-native'

export default class SignIn extends React.Component{
    static navigationOptions = {
        title: 'SignIn',
        tabBarLabel: 'Animation',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../src/icon/ani.png')}
                style={{tintColor: tintColor,height: 26,width: 26}}
            />
        ),
    }
    render(){
        return(
            <View/>
        )
    }
}