import React from 'react'
import {View,
    Animated,
    ScrollView,
    PanResponder,
    Dimensions,
    LayoutAnimation,
    UIManager} from 'react-native'

const SCREEN_WIDTH = Dimensions.get('window').width
const THRESHHOLD    = SCREEN_WIDTH * 0.25

export default class Deck extends React.Component{

    static defaultProps = {
        onSwipeLeft: () => {},
        onSwipeRight: () => {}
    }

    constructor(props){
        super(props)
        const position = new Animated.ValueXY()
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {

                position.setValue({x: gesture.dx, y: gesture.dy})
            },
            onPanResponderRelease: (event,gesture) => {
                if(gesture.dx > THRESHHOLD){
                    this.forceSwipe('right')
                }
                if(gesture.dx < -THRESHHOLD){
                    this.forceSwipe('left')
                }else{
                    this.resetPosition()
                }
            }
        })

        this.state = { panResponder, position, index: 0 }
    }

    componentWillUpdate(){
        UIManager.setLayoutAnimationEnabledExperimental && setLayoutAnimationEnabledExperimental(true)
        LayoutAnimation.spring()
    }

    forceSwipe(direction){
        const x = direction === 'right' ? SCREEN_WIDTH+200 : -SCREEN_WIDTH-100

        Animated.timing(this.state.position,{
            toValue: ({x: x,y: 0}),
            duration: 250
        }).start(()=> this.onSwipeComplete(direction))

    }

    onSwipeComplete(direction){
        const { onSwipeLeft, onSwipeRight, data } = this.props
        const item = data[this.state.index]
        direction === 'right' ? onSwipeRight(item) : onSwipeLeft(item)
        this.state.position.setValue({x:0,y:0})
        this.setState({index: this.state.index + 1})
    }

    resetPosition(){
        Animated.spring(this.state.position,{
            toValue: ({x: 0, y: 0})
        }).start()
    }

    getCardStyle(){

        const { position } = this.state
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5,0,SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg','0deg','120deg']
        })


        return{
            ...position.getLayout(),
            transform: [{ rotate }]
        }

    }
    renderCards(){
        if(this.state.index >= this.props.data.length){
           return  this.props.renderNoMoreCard()
        }

        return this.props.data.map((item, i) =>{
            if(i < this.state.index){ return null}

            if(i === this.state.index){
               return(
                   <Animated.View
                       key={item.id}
                       style={[this.getCardStyle(), styles.cardStyle]}
                       {...this.state.panResponder.panHandlers}>

                       {this.props.renderCard(item)}
                   </Animated.View>
               )
            }
            return(
                <View
                    key={item.id}
                    style={[styles.cardStyle,{top: 10 * (i - this.state.index)}]}>
                    {this.props.renderCard(item)}
                </View>
            )
        }).reverse()
    }
    render(){
        return(
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

const styles = {
    cardStyle:{
        position: 'absolute',
        width: SCREEN_WIDTH
    }
}