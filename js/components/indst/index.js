
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
var Dimensions=require('Dimensions');
var windowSize=Dimensions.get('window');

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import * as Progress from 'react-native-progress';
import Accordion from 'react-native-collapsible/Accordion';

import myTheme from '../../themes/base-theme';
import styles from './styles';

const SECTIONS = [
  { title: 'Kodeord',   content: 'Kodeord...', },
  { title: 'Sikkerhedsord',  content: 'Sikkerhedsord...', },
  { title: 'Grupper',   content: 'Grupper...', }
];

class Indst extends React.Component {
    constructure(){
      
    }
    popRoutee() {
        this.props.popRoute();
    }
	
	_renderHeader(section) {
		return (
		  <View style={styles.headview}>
			<Text style={{color:'#222', fontSize:16, }}>{section.title}</Text>
			<Image style={{width:22, height:15, position:'absolute', right:15, marginTop:-15}} source={require('../../../images/arrow.png')}/>
		  </View>
		);
	}
	_renderContent(section) {
		return (
		  <View style={styles.contentview}>
			<Text style={{color:'#222', fontSize:16}}>{section.content}</Text>
			<Image />
		  </View>
		);
	}
  
    render() {
        return (
			<View style={styles.container}>
				<View style={{flex:1,}}>
					<View style={{flexDirection:'row', height:50}}>
						<View style={{flex:0.3}}></View>
						<View style={{flex:0.4, alignItems: 'center',justifyContent: 'center'}}>
							<Text>Lagerplads</Text>
						</View>
						<View style={{flex:0.3, justifyContent: 'flex-end'}}>
							<Text style={styles.txt1} >Fe mere</Text>
							<Text style={styles.txt1} >Gratis</Text>
							<Text style={styles.txt1} >Lagerplads</Text>
						</View>
					</View>			
					
					<View style={styles.view1}>
						<Progress.Bar progress={0.3} height={8} color={'rgb(91, 156, 38)'} width={windowSize.width-40} />
					</View>
					
					<View style={styles.view2}>
						<Text style={{color:'#222', fontSize:19}}>Indstillinger</Text>
					</View>
					
					<Accordion
						sections={SECTIONS}
						renderHeader={this._renderHeader}
						renderContent={this._renderContent}
					/>
	  
				</View>
				<View style={styles.gem_btn}>
					<TouchableOpacity>
						<Text style={{fontSize:15, color:'#fff'}}>Gem</Text>
					</TouchableOpacity>
				</View>
			</View>
			
        )
    }
}

export default Indst;
