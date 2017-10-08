
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
    container_ph:{
      flexDirection :'column',
      flex:1,
      backgroundColor:'transparent'
    },
    bg_ph:{
      position :'absolute',
      left:0,
      top:0,
      width:windowSize.width,
      height:windowSize.height
    },
    buttons_container:{
     flex:0.1,
     alignItems:'center',
     justifyContent: 'center',
     flexDirection:'row',
     paddingRight:30,
     paddingLeft:30,
     paddingTop:30,
    },
    togglebutton_left:{
        flex:0.5,
        height:30,
        borderBottomLeftRadius:4,
        borderTopLeftRadius:4,
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#CCC',
		borderWidth:1

    },
    togglebutton_Right:{
        flex:0.5,
        borderWidth:1,
        height:30,
        borderBottomRightRadius:4,
        borderTopRightRadius:4,
        alignItems:'center',
        justifyContent: 'center',
        borderColor:'#CCC',
        borderLeftWidth:0,
    },
    selectview:{
        backgroundColor: 'rgb(75, 177, 49)',
    },
    selTxt:{
        fontSize:15,
        color:'#FFF',
    },
    unselTxt:{
        fontSize:15,
        color:'#000',
    },
    password:{
      flex:0.06,
      paddingLeft:20,
      paddingRight:20
    },
    txtcontainer:{
      flex:0.07,
      paddingLeft:20,
      paddingRight:20
    },
    fontbold:{
        fontSize:17,
        fontWeight:'bold',
        color:'#000'
    },
    loginBtn:{
        height:35,
        backgroundColor: 'rgb(91, 156, 38)',
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:5,

    },
    loginfont:{
        fontSize:20,
        color:'#FFF',
    },
    fotgotTxt:{
        color:'rgb(91, 156, 38)',
        fontSize:13,

    },
    forgotTouch:{
        position:'absolute',
        right:20,
        bottom:15
    },
    inputtxtStyle:{
        backgroundColor: 'rgb(216, 216, 216)',
        height:30,fontSize:14,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:0,
        paddingBottom:0
    }
 });
