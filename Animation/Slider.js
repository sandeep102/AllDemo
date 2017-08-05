import React from 'react'
import {View,Animated} from 'react-native'
import ImageSlider from 'react-native-image-slider'

export default class Slider extends React.Component {

    constructor() {
        super();
        this.state = {
            position: 1,
            interval: null
        }
    }
    componentWillMount() {
        this.setState({interval: setInterval(() => {
            this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
        }, 2000)});
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    render(){
        return(
            <ImageSlider style={{marginLeft:10,marginRight:10}}
                images={[
                    require('../src/image/cat.jpg'),
                    require('../src/image/puppy.jpg'),
                    require('../src/image/rabbit.jpg')
                ]}
                position={this.state.position}
                onPositionChanged={position => this.setState({position})}
            />

        )
    }

}