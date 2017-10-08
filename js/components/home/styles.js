
'use strict';

var React = require('react-native');

var { StyleSheet } = React;
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

module.exports = StyleSheet.create({
	container:{
		flexDirection :'column',
		flex:1,
		backgroundColor:'transparent'
	},
	headerContainer:{
		justifyContent: 'center',
		alignItems: 'center',
		flex:0.08,
		flexDirection:'row',
		backgroundColor:'#FFF',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {height: 1,  width: 1},
		//borderBottomWidth:1,
		borderColor:'#CCC'
	},
	headerLogo:{
		width:windowSize.width/3+20,
		height:40
	},
	footerContainer:{
		flex:0.1,
		backgroundColor:'#FFF',
		flexDirection:'row',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {height: 1,  width: 1},
		borderTopWidth:1,
		borderColor:'#CCC'
	},
	footBtn:{
		flex:0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnImg:{
		width:27,
		height:27,
		resizeMode: 'contain'
	},
	filterIco:{
		width:30,
		height:28,
	},
	filterBtn:{
		position:'absolute',
		right:20,
		bottom:5
	},
	filterbox:{
		width:windowSize.width-20, 
		position:'absolute', 
		top:38, right: 10, 
	},
	filterbox_view:{
		padding:4, 
		borderBottomWidth:1, 
		borderColor:'#ccc', 
		marginLeft:10, marginRight:10,
	},
	arrow: {
		width: 0,
		height: 0,
		borderLeftWidth: 15,
		borderRightWidth: 15,
		borderColor: 'transparent',
		borderBottomWidth: 15,
		borderBottomColor: 'white',
		position:'absolute',
		right: 10,
	}
});
