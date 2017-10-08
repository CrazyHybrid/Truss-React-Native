
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushNewRoute , pushNewRouteHome} from '../../actions/route';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

//import { popRoute,pushNewRoute } from '../../actions/route';
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

import myTheme from '../../themes/base-theme';
import styles from './styles';
class OverSight extends React.Component {
    constructor(props){
      super(props);
    }
    popRoutee() {
        this.props.popRoute();
    }
	navigateTo(route) {
        this.props.pushNewRoute(route);
    } 
	navigateToInHome(route) {	
		this.props.pushNewRouteHome(route);
    }
    render() {
        return (
		<View style={{flex:1, flexDirection:'column'}}>
			<View style={{height: 50, width:windowSize.width, backgroundColor:'#ccc', justifyContent: 'center', alignItems:'center'}}>
				<View style={{flexDirection:'row',  height:33, paddingLeft:20, marginLeft:20, marginRight:20,
							  backgroundColor:'#fff', 
							  borderRadius:6, justifyContent:'center', alignItems:'center'}}>
						<Image style={{width:20, height:20, marginLeft:15, marginRight:15}} source={require('../../../images/search.png')}></Image>
						<TextInput 
							style={{flex:1, marginBottom:-10, paddingBottom:16, fontSize:16}}
							placeholder="Search ..."
							placeholderTextColor="#bbb"
						/>
				</View>
			</View>
			
            <View style={styles.contentview} >
				<TouchableOpacity style={{height:180}} onPress={()=>this.navigateToInHome('galleryimg')} >
					<Image style={styles.touch_view1} source={require('../../../images/tool.png')}/>
				</TouchableOpacity>
				
				<TouchableOpacity style={styles.touch_view} onPress={() => this.navigateTo('newgroup')}>
				<View style={styles.imag_view}>
					<Image style={{width:50, height:50}} source={require('../../../images/camera.png')}/>
					<Text style={{marginTop:10}}>Upload Image</Text>
				</View>
				</TouchableOpacity>
			</View>
        </View> 
        )
    }
}

function bindAction(dispatch) {
    return {
        pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
		pushNewRouteHome:(route)=>dispatch(pushNewRouteHome(route)),

    }
}

export default connect(null, bindAction)(OverSight);



