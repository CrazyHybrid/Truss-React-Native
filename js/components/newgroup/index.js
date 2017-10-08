
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushNewRoute , popRoute} from '../../actions/route';
export var globalHomeNav = {};
import { Container, Header, Title, Content, Text,Button,Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight,
  TextInput
} from 'react-native';

import Navigator from 'Navigator';

import myTheme from '../../themes/base-theme';
import styles from './styles';



class NewGroup extends Component {
   
    navigateTo(route) {
        this.props.pushNewRoute(route);
    } 
	popRoutee() {
        this.props.popRoute();
    }
	constructor(props){
		super(props);
		this.state={showView: false};
	}
	
	toggleView() {
		this.setState({showView: !this.state.showView});
	}
	
    render() {
		
        return (
			<View style={styles.container}>
				
				<View style={styles.headerContainer}>
					<Image style={styles.headerLogo} source={require('../../../images/logo_black_1600.png')}/>
					<TouchableOpacity style={styles.filterBtn}  onPress={ () => this.toggleView() }>
						<Image style={styles.filterIco} source={require('../../../images/Filter_icon.png')}/>
					</TouchableOpacity>
					
				</View>
			
                <View >
                    <View style={{flexDirection :'row', backgroundColor:'#eee', padding:10}}>
                    
						<TouchableOpacity style={styles.touch_view}>
						<View style={styles.imag_view}>
							<Image style={{width:50, height:50}} source={require('../../../images/camera.png')}/>
							<Text style={{marginTop:10}}>Upload Image</Text>
						</View>
						</TouchableOpacity>
					
						<TouchableOpacity style={styles.touch_view}>
						<View style={styles.imag_view}>
							<Image style={{width:50, height:50}} source={require('../../../images/camera.png')}/>
							<Text style={{marginTop:10}}>Upload Image</Text>
						</View>
						</TouchableOpacity>
					</View>
				</View>
				
				<ScrollView>
					<Text style={styles.label}>
						Navngiv din ejendel
					</Text>
					<View style={styles.input}>
					    <TextInput style={styles.inputtxtStyle}
							placeholderTextColor="#d6d4d4"  />
				    </View>
					
					<Text style={styles.label}>
						Serienummer
					</Text>
					<View style={styles.input}>
					    <TextInput style={styles.inputtxtStyle}
							placeholderTextColor="#d6d4d4"  />
				    </View>
					
					<Text style={styles.label}>
						Grupper
					</Text>
					<View style={styles.input}>
					    <TextInput style={styles.inputtxtStyle}
							placeholderTextColor="#d6d4d4"  />
				    </View>
					
					<Text style={styles.label}>
						Kobsdato
					</Text>
					<View style={styles.input}>
					    <TextInput style={styles.inputtxtStyle}
							placeholderTextColor="#d6d4d4"  />
				    </View>
					
					<Text style={styles.label}>
						Pris (DKK inkl moms)
					</Text>
					<View style={styles.input}>
					    <TextInput style={styles.inputtxtStyle}
							placeholderTextColor="#d6d4d4"  />
				    </View>
					
					<Text style={styles.label}>
						Noter og detaljeret beskrivelse
					</Text>
					<View style={styles.input}>
					    <TextInput style={[styles.inputtxtStyle, {marginBottom:20, height:60}]}
							placeholderTextColor="#d6d4d4"  />
				    </View>
					
                </ScrollView>
				
		        <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => this.popRoutee()}>
					   <Text style={{color:'#FFF'}}>Gem</Text>
					 </TouchableOpacity>
				</View>
				
			</View>
			
		)
    }
    
}

function bindAction(dispatch) {
    return {        
		pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
		popRoute:(route)=>dispatch(popRoute(route)),

    }
}

export default connect(null, bindAction)(NewGroup);


