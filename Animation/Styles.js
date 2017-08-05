'use strict'

var React = require('react-native')

var style = React.StyleSheet.create({
    headerStyle:{
        flex:1,


    },
    topTab:{
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#003399',
        borderRadius: 50
    },
    buttonStyle:{
        flex:1,
        borderRadius: 50,
    },
    buttonPress:{
        flex:1,
        padding: 10,
        marginLeft:2,
        marginRight:2,
        backgroundColor: '#00a3cc',
        borderRadius: 50
    },
    content:{
        flex:1,
    },
    Ball:{
        height: 60,
        width: 60,
        borderRadius: 30,
        backgroundColor: '#000',
        borderWidth: 30,
    },
    cardStyle:{
        backgroundColor: '#80bfff',
        marginTop:10,
        marginLeft:10,
        marginRight:10,
        borderWidth:1,
        borderColor: '#ccc'
    }
})

module.exports = style