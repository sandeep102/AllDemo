import React from 'react'
import {View,Text,Image} from 'react-native'
import { TabNavigator } from 'react-navigation'

export default class Map extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Map',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../src/icon/map.png')}
                style={{tintColor: tintColor,height: 26,width: 26}}
            />
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