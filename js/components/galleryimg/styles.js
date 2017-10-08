
'use strict';

var React = require('react-native');

var { StyleSheet } = React;

module.exports = StyleSheet.create({
    sbtn:{
		height:33,
		backgroundColor:'red', 
		alignItems:'center', justifyContent: 'center'
	},
	srclview: {
		flex:1, flexDirection:'column', backgroundColor:'#eee'
	},
	dview: {
		borderBottomWidth:1, margin:15, paddingBottom:13,
		borderBottomColor:'#aaa', marginBottom:0
	},
	dview1: {
		borderBottomWidth:1, margin:15, paddingBottom:13, borderBottomColor:'#aaa'
	},
	txt1: {
		position:'absolute',color:'#222', right:0, marginTop:-18
	}
});
