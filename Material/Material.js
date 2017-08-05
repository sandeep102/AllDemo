import React from 'react'
import {View,Text,Image} from 'react-native'
import { TabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Material extends React.Component{
    static navigationOptions = {
        tabBarLabel: 'Material',
        drawerIcon: ({ tintColor }) => (
            <Icon name="code" size={20} color="#009900" />
        ),
    };
    render(){
        return(
            <View>
                <Text>Material</Text>
            </View>
        )
    }
}