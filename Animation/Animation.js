import React from 'react'
import {View,Text,Image,TouchableHighlight,Animated,
    Easing,StyleSheet,
    TouchableOpacity} from 'react-native'
import renderIf from './renderif'
import Deck from './Deck'
import {Card,Button} from 'react-native-elements'
import ImageSlider from 'react-native-image-slider'
import Slider from './Slider'
import Ball from './Ball'
import SignIn from './SignIn'
import Icon from 'react-native-vector-icons/FontAwesome';
import {StackNavigator,TabNavigator} from 'react-navigation'

var styles = require('./Styles')

const DATA = [
    { id: 1, text: 'Zebra', uri: require('../src/image/zebra.png') },
    { id: 2, text: 'Tiger', uri: require('../src/image/tiger.jpeg') },
    { id: 3, text: 'Elephant', uri: require('../src/image/elephant.jpeg') },
    { id: 4, text: 'Rhino', uri: require('../src/image/rhino.jpg') },
    { id: 5, text: 'Panda', uri: require('../src/image/panda.jpeg') },
    { id: 6, text: 'Lepard', uri: require('../src/image/lepard.jpg') },
    { id: 7, text: 'Puppy', uri: require('../src/image/puppy.jpg') },
    { id: 8, text: 'Cat', uri: require('../src/image/cat.jpg') },
];

class Animation extends React.Component{

    static navigationOptions = ({navigation}) => {
            return{
                title: 'Home',
                headerLeft:
                    <TouchableOpacity onPress={()=> navigation.navigate('DrawerOpen')}>
                        <Image
                            source={require('../src/icon/navIcon.png')}
                            style={{height: 25,width: 25,marginLeft:15}}
                        />
                    </TouchableOpacity>,
                drawerIcon: ({ tintColor }) => (
                    <Icon name="home" size={24} color="#900" />
                ),
                tabBarLabel: 'Animation',
                headerStyle: ({backgroundColor: '#00b33c'}),
                tabBarIcon: ({ tintColor }) => (
                    <Image
                        source={require('../src/icon/ani.png')}
                        style={{tintColor: tintColor,height: 26,width: 26}}
                    />
                ),
            }
    };

    constructor(props){
        super(props);
        this.state ={
            status:true,
            buttonPress: true,
        }


    }

    renderCard(item){
        return(
            <Card
                key={item.id}
                title={item.text}
                image={item.uri}

            >
                <Text style={{marginBottom:10}}>I will do letter</Text>

                <Button
                    backgroundColor="#000"
                    title="View Now!"
                />
            </Card>
        )
    }
    showView(){
        this.setState({status: true})
        this.setState({buttonPress: true})

    }
    showView2(){
        this.setState({status: false})
        this.setState({buttonPress: false})
        this.position = new Animated.ValueXY(0,0)

    }

    renderNoMoreCard(){
        return(
            <Card title="All Done"
            >
                <Text>No More Cards</Text>
                <Button
                    backgroundColor="#000"
                    title="Get More!"
                />
            </Card>
            )
    }

    render(){
        return(
            <View style={styles.headerStyle}>

                <View style={styles.topTab}>
                    <TouchableHighlight style={
                                        this.state.buttonPress ? styles.buttonPress : styles.buttonStyle }
                                        onPress={()=> this.showView()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>CardView</Text>
                    </TouchableHighlight>

                    <TouchableHighlight style={
                        this.state.buttonPress ? styles.buttonStyle : styles.buttonPress }  onPress={()=> this.showView2()}>
                        <Text style={{textAlign: 'center',color: '#fff'}}>Slider</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.content}>
                    {renderIf(this.state.status)(

                        <View>

                            <Deck
                                data={DATA}
                                renderCard={this.renderCard}
                                renderNoMoreCard={this.renderNoMoreCard}
                            />
                        </View>

                    )}
                    {renderIf(!this.state.status)(
                        <View>
                            <Slider/>
                            <Button
                                style={{top:20}}
                            title="Bouncing Ball"
                            backgroundColor="#0066ff"
                            icon={{name: 'autorenew'}}

                            onPress={()=> this.props.navigation.navigate('Ball')}
                            />
                            <Button
                                style={{top:25}}
                                title="Sign In"
                                backgroundColor="#8c1aff"
                                icon={{name: 'vpn-key'}}
                                onPress={()=> this.props.navigation.navigate('Auth')}
                            />

                        </View>
                    )}
                </View>
            </View>
        )
    }
}

const Animate = StackNavigator({
    Animation: {screen: Animation},
    Ball: {screen: Ball},
    Auth: {screen: SignIn}
})

export default Animate
