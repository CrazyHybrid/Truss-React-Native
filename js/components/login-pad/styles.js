
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
    container_ph:{
      flexDirection :'row',
      flex:1,
      backgroundColor:'transparent'
    },
    leftbar_top:{
        flex:0.2,
        alignItems:'center',
        justifyContent: 'center',
    },
    password:{
        height:30,
        paddingLeft:20,
        paddingRight:20,        
        paddingBottom:5
        
    },
    fontbold:{
        fontSize:11,
        fontWeight:'400',
        color:'#000'
    },
    txtcontainer:{
        height:23,
        paddingLeft:20,
        paddingRight:20,
        
    },
    inputtxtStyle:{
        backgroundColor: 'rgb(216, 216, 216)',
        height:20,fontSize:12,
        paddingLeft:11,
        paddingRight:11,
        paddingTop:0,
        paddingBottom:0,
        borderRadius:3
    },
    forgotTouch:{
        position:'absolute',
        right:20,
        bottom:12
    },
    fotgotTxt:{
        color:'rgb(91, 156, 38)',
        fontSize:6,

    },
    loginBtn:{  
        backgroundColor: 'rgb(91, 156, 38)',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:5,
        height:20,
        paddingBottom:8
    },
    loginfont:{
        fontSize:8,
        color:'#FFF',
        marginTop:8,
        marginBottom:10
    },
    bottomeTxt:{
        fontSize:8,
        fontWeight:'400',
        color:'#000',
        marginTop:11
    },
    bottomtxtContainer:{
        height:50,
        paddingLeft:20,
        paddingRight:20,
    },
    bottomtxtContainer1:{
        height:40,
        paddingLeft:20,
        paddingRight:20,
        marginTop:-30
    },
    bottomTouch:{
        position:'absolute',
        right:20,
        top:10
    },
    leftImg:{
       // width:windowSize.width
    }
 });
