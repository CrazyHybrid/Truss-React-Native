
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
	container:{
		flexDirection :'column',
		flex:1,
	},
    contentview:{
		flex:1, flexDirection :'row', backgroundColor:'#eee', padding:10
	},
	touch_view: {
		margin:10, 
		width:windowSize.width/2 - 30, 
		height:160, 
		borderWidth:2, borderRadius:5, borderColor:'#888', borderStyle:'dashed', 
		alignItems:'center', 
		justifyContent: 'center',
	},
	touch_view1: {
		margin:10, 
		width:windowSize.width/2 - 30, 
		height:160, 
		borderRadius:4, 
		alignItems:'center', 
		justifyContent: 'center',
		resizeMode: 'stretch'
	},
	imag_view:{
		alignItems:'center', 
		justifyContent: 'center',
	}
	
});
