
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
		flex:0.1,
		flexDirection:'row',
		backgroundColor:'#FFF',
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {height: 1,  width: 1},
		borderBottomWidth:1,
		borderColor:'#CCC'
	},
	headerLogo:{
		width:windowSize.width/5,
		height:20
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
		flex:0.2,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnImg:{
      width:18,
	  height:18
	},
	filterIco:{
	  width:16,
	  height:15,

	},
	filterBtn:{
		position:'absolute',
		right:20,
		bottom:5
	}
});
