import React from 'react'
import {View,Image,Animated,Easing,Dimensions} from 'react-native'

export default class Ball extends React.Component{
    static navigationOptions = {
        title: 'Bouncing Ball',
        tabBarLabel: 'Animation',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../src/icon/ani.png')}
                style={{tintColor: tintColor,height: 26,width: 26}}
            />
        ),
    }
    componentWillMount(){
        this.position = new Animated.ValueXY(0,0)
        Animated.timing(this.position,{
            toValue: {x:0, y: Dimensions.get('window').height-150},
            easing: Easing.bounce,
            duration: 4000
        }).start()
    }
    render(){
        return(
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.Ball} />
            </Animated.View>

        )
    }
}

const styles = {
    Ball:{
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#000',
        borderWidth: 30,
    }
}