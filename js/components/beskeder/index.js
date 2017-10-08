
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

import myTheme from '../../themes/base-theme';
import styles from './styles';

class Beskeder extends React.Component {
    constructure(){
      
    }
    popRoutee() {
        this.props.popRoute();
    }
	
    render() {
        return (
			<View style={styles.container}>
				<View style={styles.subject_view}>
					<Text style={{color:'#111', fontSize:20}}>Beskeder</Text>
				</View>
				
				<ScrollView key={'scrollView'} horizontal={false} style={{flex:1,}}>
					<View style={{backgroundColor:'white'}}>
						<View style={styles.scroll_txt} >
							<Text style={{color:'#111'}}>2 dage  </Text>
							<Image style={{width:20, height:20}} source={require('../../../images/clock.png')}/>
						</View>
						<View style={styles.scroll_view}>
							<Text style={{color:'#111', fontSize:18}}>Hidereg.dk</Text>
							<Text style={{color:'#111', fontSize:15}}>Velkommen til Hidereg.dk</Text>
							<Text style={{color:'#111', fontSize:12, marginTop:5}}>
								Du har nu en enestaende chance for at foto registrere dit indbo helt
								anonymat. Hvis uhelder er ude or tyven kommer forbi kan du nemt
								dokumentere dit ejerskab, over stjaldne ejendele overfor politi og
								forsikringsselskaber.
							</Text>
						</View>
					</View>
					
					<View style={{backgroundColor:'#ddd', borderBottomWidth:0.5, borderBottomColor:'#aaa'}}>
						<View style={styles.scroll_txt} >
							<Text style={{color:'#111'}}>8 dage  </Text>
							<Image style={{width:20, height:20}} source={require('../../../images/clock.png')}/>
						</View>
						<View style={styles.scroll_view}>
							<Text style={{color:'#111', fontSize:18}}>Hidereg.dk</Text>
							<Text style={{color:'#111', fontSize:15}}>Velkommen til Hidereg.dk</Text>
							<Text style={{color:'#111', fontSize:12, marginTop:5}}>
								Du har nu en enestaende chance for at foto registrere dit indbo helt
								anonymat. Hvis uhelder er ude or tyven kommer forbi kan du nemt
								dokumentere dit ejerskab, over stjaldne ejendele overfor politi og
								forsikringsselskaber.
							</Text>
						</View>
					</View>
					
					<View style={{backgroundColor:'#ddd'}}>
						<View style={styles.scroll_txt} >
							<Text style={{color:'#111'}}>12 dage  </Text>
							<Image style={{width:20, height:20}} source={require('../../../images/clock.png')}/>
						</View>
						<View style={styles.scroll_view}>
							<Text style={{color:'#111', fontSize:18}}>Hidereg.dk</Text>
							<Text style={{color:'#111', fontSize:15}}>Velkommen til Hidereg.dk</Text>
							<Text style={{color:'#111', fontSize:12, marginTop:5}}>
								Du har nu en enestaende chance for at foto registrere dit indbo helt
								anonymat. Hvis uhelder er ude or tyven kommer forbi kan du nemt
								dokumentere dit ejerskab, over stjaldne ejendele overfor politi og
								forsikringsselskaber.
							</Text>
						</View>
					</View>
				</ScrollView>
			
				<View style={styles.send_btn}>
					<Image style={{width:20, height:15}} source={require('../../../images/message.png')}/>
					<TouchableOpacity>
						<Text style={{fontSize:15, color:'#fff'}}>  Send besked</Text>
					</TouchableOpacity>
				</View>
			
			</View>
			
        )
    }
}

export default Beskeder;
