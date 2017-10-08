
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    container:{
		flexDirection :'column',
		flex:1,
		backgroundColor:'white'
	},
	subject_view: {
		backgroundColor:'#e9e8e6', 
		alignItems: 'center', 
		padding:10
	},
	scroll_txt: {
		flexDirection:'row', 
		padding:8, 
		paddingBottom:0, 
		alignItems:'flex-end', 
		justifyContent: 'flex-end',
	},
	scroll_view: {
		padding:20, 
		paddingTop:0, 
		marginTop:-5
	},
	send_btn: {
		flexDirection :'row', 
		height:35, 
		backgroundColor:'rgb(91, 156, 38)', 
		alignItems: 'center',
		justifyContent: 'center'
	}
	
});
