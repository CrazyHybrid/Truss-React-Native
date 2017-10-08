
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushNewRoute } from '../../actions/route';

import { Container, Header, Title, Content, Text,Button,Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput
} from 'react-native';

//import Device from 'react-native-device';
import myTheme from '../../themes/base-theme';
import styles from './styles';


var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');


class Loginpage extends React.Component {
    constructor(props){
		super(props);
		this.state={leftview:styles.selectview,selval:"left",leftTxt:styles.selTxt,rightTxt:styles.unselTxt};
		//this.state={selval:"left"};
	}
    navigateTo(route) {
       
        this.props.pushNewRoute(route);
    }
	toggle(){
		if(this.state.selval=="left"){
			 this.setState({leftview:{},rightview:styles.selectview,selval:'right',leftTxt:styles.unselTxt,rightTxt:styles.selTxt});
		}
		else{
			this.setState({leftview:styles.selectview,rightview:{},selval:'left',leftTxt:styles.selTxt,rightTxt:styles.unselTxt});
		}
	}
	
    render() {
        return (
            <View style={styles.container_ph}>
               <Image style={styles.bg_ph} source={require('../../../images/login_bg.png')} />
               <View style={{flex:0.55}}>

               </View>
               <View style={styles.buttons_container}>
                 <View style={[styles.togglebutton_left,this.state.leftview]}><TouchableOpacity onPress={() => this.toggle()} style={{paddingLeft:30,paddingRight:30}}><Text style={this.state.leftTxt} >Log ind</Text></TouchableOpacity></View>
                 <View style={[styles.togglebutton_Right,this.state.rightview]}><TouchableOpacity onPress={() => this.toggle()} style={{paddingLeft:30,paddingRight:30}}><Text style={this.state.rightTxt}>Opert bruger</Text></TouchableOpacity></View>
               </View>


               <View style={styles.password}>
                  <Text style={styles.fontbold}>Brugernavn</Text>
               </View>
               <View style={styles.txtcontainer}>
                   <TextInput
                        style={styles.inputtxtStyle}
                        placeholderTextColor="#d6d4d4"  />
               </View>
                <View style={styles.password}>
                   <Text  style={styles.fontbold}>Kodeord</Text>
                   <TouchableOpacity style={styles.forgotTouch}><Text style={styles.fotgotTxt}>Glemt kodeord?</Text></TouchableOpacity>
               </View>

              <View style={styles.txtcontainer}>
                <TextInput
                   secureTextEntry ={true}  style={styles.inputtxtStyle}
                    placeholderTextColor="#d6d4d4" />
               </View>
               <View style={{flex:0.11,paddingLeft:20,paddingRight:20,paddingTop:10}}>
                  <TouchableOpacity onPress={() => this.navigateTo('home')}><View style={styles.loginBtn}><Text style={styles.loginfont}>Login</Text></View></TouchableOpacity>
               </View>

            </View>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
		pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Loginpage);





