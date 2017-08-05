import React from 'react'
import {View,Text,ScrollView,Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from 'react-native-elements'

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Slides extends React.Component{

    renderLastSlide(index){
        if(index === this.props.data.length - 1){
            return(
                <Button title="Onwords!"
                        icon={{name: 'forward'}}
                        buttonStyle={{backgroundColor:'#007399'}}
                        onPress={this.props.onComplete}
                />
            )
        }
    }

    renderSlide(){
      return this.props.data.map((slide,index) => {
            return(
                <View key={slide.text}
                      style={[styles.slideStyle,{backgroundColor: slide.color}]}>

                    <Text style={styles.textStyle}>{slide.text}</Text>
                    {this.renderLastSlide(index)}
                </View>
            )
        });
    }
    render(){
        return(

            <ScrollView
                horizontal
                pagingEnabled
                style={{flex:1}}
            >
                {this.renderSlide()}
            </ScrollView>
        )
    }
}

const styles = {
    slideStyle:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    textStyle:{
        fontSize: 30,
        color: '#fff'
    }
}
