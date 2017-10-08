
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from 'react-native';

import { popRouteHome } from '../../actions/route';
import ImageSlider from './ImageSlider';
import myTheme from '../../themes/base-theme';
import styles from './styles';
class GalleryImg extends React.Component {
    constructure(){
      
    }
    popRoutee() {
        this.props.popRouteHome();
    }
	
    render() {
        return (

            <View style={{flex:1}}>
			   <ImageSlider images={[
					'http://192.168.1.25:82/htdocs/a.png',
					'http://192.168.1.25:82/htdocs/b.png',
				    'http://192.168.1.25:82/htdocs/c.png',
					'http://192.168.1.25:82/htdocs/d.png'
				]}/>
				
				<ScrollView style={styles.srclview}>
					<View style={styles.dview}>
						<Text style={{color:'#222'}}>Mebler</Text>
						<Text style={{color:'#222', fontSize:18, marginTop:5}}>Beo Play 800 mk2</Text>
						<Text style={{color:'#222', marginTop:10}}>Lorem ispusum that  is patrt consector efficulst sdeedtt beasuetif big fighteen </Text>
					</View>
				 
					<View style={styles.dview}>
						<Text style={{color:'#222'}}>Serienummer</Text>
						<Text style={styles.txt1}>457689</Text>
					</View>
				 
					<View style={styles.dview}>
						<Text style={{color:'#222'}}>Kobsdato</Text>
						<Text style={styles.txt1}>4.6.2016</Text>
					</View>
				 
					<View style={styles.dview1}>
						<Text style={{color:'#222'}}>Pris DKK</Text>
						<Text style={styles.txt1}>36.700</Text>
					</View>
				</ScrollView>
				
				<View style={styles.sbtn}>
					<TouchableOpacity onPress={() => this.popRoutee()}>
					<Text style={{color:'#fff', fontSize:19}}>Maker son strantest</Text>
					</TouchableOpacity>
				</View>
					
			</View>
          
        )
    }
}

function bindAction(dispatch) {
    return {        		
		popRouteHome:(route)=>dispatch(popRouteHome(route)),

    }
}

export default connect(null, bindAction)(GalleryImg);

