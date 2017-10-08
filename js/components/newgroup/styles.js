
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
		height:35,
		backgroundColor:'rgb(91, 156, 38)',
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	footBtn:{
		flex:0.25,
		justifyContent: 'center',
		alignItems: 'center',
	},
	btnImg:{
		width:48,
		height:45
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
	},
	touch_view: {
		margin:10, 
		width:windowSize.width/2 - 30, 
		height:150, 
		borderWidth:2, borderRadius:5, borderColor:'#888', borderStyle:'dashed', 
		alignItems:'center', 
		justifyContent: 'center',
	},
	imag_view:{
		alignItems:'center', 
		justifyContent: 'center',
	},
	inputtxtStyle:{
        backgroundColor: 'rgb(216, 216, 216)',
        height:27, fontSize:14,
        paddingLeft:10,
        paddingRight:10,
        paddingTop:0,
        paddingBottom:0
    },
	label: {
		marginLeft:20, marginRight:20, color:'#222', marginTop:5
	},
	input: {
		paddingLeft:20,  paddingRight:20, paddingTop:3
	}
});
