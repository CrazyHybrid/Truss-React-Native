
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    container:{
		flexDirection :'column',
		flex:1,
		backgroundColor:'#eee'
	},
	gem_btn: {
		flexDirection :'row', 
		height:35, 
		backgroundColor:'rgb(91, 156, 38)', 
		alignItems: 'center',
		justifyContent: 'center'
	},
	txt1: {
		color:'rgb(91, 156, 38)', fontSize:11
	},
	view1: {
		height:11,alignItems: 'center',justifyContent: 'center'
	},
	view2: {
		height:50, alignItems:'center',justifyContent: 'center'
	},
	headview: {
		height:40, 
		backgroundColor:'white', 
		alignItems: 'center', 
		justifyContent: 'center', 
		borderBottomWidth:1, borderBottomColor:'#aaa'
	},
	contentview: {
		backgroundColor:'white', borderBottomWidth:1, borderBottomColor:'#aaa', padding:10
	}
});
