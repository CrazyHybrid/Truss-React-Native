
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

//import { popRoute,pushNewRoute } from '../../actions/route';

import myTheme from '../../themes/base-theme';
//import styles from './styles';
class OverSight extends React.Component {
    constructure(){

    }
    popRoutee() {
        this.props.popRoute();
    }
	

    render() {
        return (

               <View style={{flex:1}}><Text>Here is Oversight</Text></View>
          
        )
    }
}


export default OverSight;
