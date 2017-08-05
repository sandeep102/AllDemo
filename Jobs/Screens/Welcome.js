import React from 'react'
import {View,Text,TouchableOpacity,Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Slides from '../component/Slides'

const SLIDE_DATA = [
    {'text': 'Welcome to jobApp', color: '#0099ff'},
    {'text':'use this to get job',color: '#008080'},
    {'text':'set Your location',color: '#0099cc'}
]

export default class Welcome extends React.Component{
    static navigationOptions = ({navigation}) => {
        return{
            title: 'Job App',
            headerLeft:
                <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                    <Image
                        source={require('../../src/icon/navIcon.png')}
                        style={{height: 25,width: 25,marginLeft:15}}
                    />
                </TouchableOpacity>,
            drawerIcon: ({ tintColor }) => (
                <Icon name="dashboard" size={24} color="#663300" />
            ),
            headerStyle: ({backgroundColor: '#00b33c'}),
        }
    };

    constructor(props){
        super(props);
    }

    onSlideComplete = () => {
        this.props.navigation.navigate('Auth')
    }

    render(){
        return(
            <Slides data={SLIDE_DATA} onComplete={this.onSlideComplete} />
        )
    }
}
