
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


class Loginpage extends Component {
   
    navigateTo(route) {
       
        this.props.pushNewRoute(route);
    }
    render() {
        return (
            <View style={styles.container_ph}>
                 <View style={{flex:0.35,flexDirection:'column'}}>
                    <View style={styles.leftbar_top}>
                       <Image style={{width:130,height:40}} source={require('../../../images/logo_black_1600.png')} />
                     </View>

                   <View style={{flex:0.80}}>
                     <View style={styles.password}>
                       <Text style={styles.fontbold}>Brugernavn</Text>
                     </View>

                     <View style={styles.txtcontainer}>
                       <TextInput
                         style={styles.inputtxtStyle}
                         placeholderTextColor="#d6d4d4"  />
                     </View>

                     <View style={styles.password}>
                        <Text  style={[styles.fontbold]}>Kodeord</Text>
                          <TouchableOpacity style={styles.forgotTouch}><Text style={styles.fotgotTxt}>Glemt kodeord?</Text></TouchableOpacity>
                     </View>
                     <View style={styles.txtcontainer}>
                           <TextInput
                            password={true}  style={styles.inputtxtStyle}
                            placeholderTextColor="#d6d4d4" />
                    </View>

                     <View style={{height:18,paddingLeft:20,paddingRight:20,marginTop:5,}}>
                       <TouchableOpacity style={{height:10}} onPress={() => this.navigateTo('home')}><View style={styles.loginBtn}><Text style={styles.loginfont}>Login</Text></View></TouchableOpacity>
                     </View>

                     <View style={[styles.bottomtxtContainer,{marginTop:10}]}>
                        <Text style={styles.bottomeTxt}>Er du ikke medlem?</Text>
                        <TouchableOpacity style={styles.bottomTouch}><Text style={styles.fotgotTxt}>Opret bruger</Text></TouchableOpacity>
                      </View>

                      <View style={styles.bottomtxtContainer1}>
                        <Text style={styles.bottomeTxt}>Fundet en ejendel?</Text>
                        <TouchableOpacity style={styles.bottomTouch}><Text style={styles.fotgotTxt}>Kontakt bruger</Text></TouchableOpacity>
                      </View>

                   </View>

                 </View>
                 <View style={{flex:0.65}}>
                    <Image  source={require('../../../images/login_right.png')} />
                 </View>



            </View>
        )
    }
}

function bindAction(dispatch) {
    return {
		pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Loginpage);





