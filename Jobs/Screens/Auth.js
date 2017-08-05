import React from 'react'
import {View,Text,StyleSheet,Dimensions,ScrollView,TextInput} from 'react-native'
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome'
import {Button} from 'react-native-elements'


var screen = Dimensions.get('window');

export default class FbAuth extends React.Component{

    constructor() {
        super();
        this.state = {
            isOpen: false,
            isDisabled: false,
            swipeToClose: true,
        };
    }

    onClose() {
        console.log('Modal just closed');
    }

    onOpen() {
        console.log('Modal just openned');
    }

    onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
    }

    renderList() {
        var list = [];

        for (var i=0;i<50;i++) {
            list.push(<Text style={styles.text} key={i}>Elem {i}</Text>);
        }

        return list;
    }

    render() {
        var BContent = <Button onPress={() => this.setState({isOpen: false})} buttonStyle={[styles.btn, styles.btnModal]}>X</Button>;

        return (
            <View style={styles.wrapper}>
                <Button onPress={() => this.refs.modal3.open()} buttonStyle={styles.btn}>Position centered + backdrop + disable</Button>

                <Modal style={[styles.modal, styles.modal3]} position={"center"} ref={"modal3"} isDisabled={this.state.isDisabled}>
                    <Text style={styles.text}>Modal centered</Text>
                    <Button onPress={() => this.setState({isDisabled: !this.state.isDisabled})} style={styles.btn}>Disable ({this.state.isDisabled ? "true" : "false"})</Button>
                </Modal>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    wrapper: {
        paddingTop: 50,
        flex: 1
    },

    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    modal2: {
        height: 230,
        backgroundColor: "#3B5998"
    },

    modal3: {
        height: 300,
        width: 300
    },

    modal4: {
        height: 300
    },

    btn: {
        margin: 10,
        backgroundColor: "#3B5998",

        padding: 10
    },

    btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
    },

    text: {

        fontSize: 22
    }

});
