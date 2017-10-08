
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushNewRoute , pushNewRouteHome} from '../../actions/route';
export var globalHomeNav = {};
import { Container, Header, Title, Content, Text,Button,Icon } from 'native-base';
import {
  AppRegistry,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableHighlight
} from 'react-native';

import Navigator from 'Navigator';

import myTheme from '../../themes/base-theme';
import styles from './styles';

import OverSight from '../oversight/';
import Lavliste from '../lavliste/';
import Beskeder from '../beskeder/';
import Indst from '../indst/';
import GalleryImg from '../galleryimg/';

class Home extends Component {
   
    navigateTo(route) {
        this.props.pushNewRoute(route);
    } 
	navigateToInHome(route, flag) {
		this.props.pushNewRouteHome(route);
		if(flag == 1){
			this.setState({
				img1:require('../../../images/opretnyt_ph1.png'),
				img2:require('../../../images/lavliste_ph.png'),
				img3:require('../../../images/beskeder.png'),
				img4:require('../../../images/indstillinger_ph.png'),
				
				font1: 'rgb(75, 177, 49)',
				font2: '#888',
				font3: '#888',
				font4: '#888',
			});
		}else if(flag == 2){
			this.setState({
				img1:require('../../../images/opretnyt_ph.png'),
				img2:require('../../../images/lavliste_ph1.png'),
				img3:require('../../../images/beskeder.png'),
				img4:require('../../../images/indstillinger_ph.png'),
				
				font1: '#888',
				font2: 'rgb(75, 177, 49)',
				font3: '#888',
				font4: '#888',
			});
		}else if(flag == 3){
			this.setState({
				img1:require('../../../images/opretnyt_ph.png'),
				img2:require('../../../images/lavliste_ph.png'),
				img3:require('../../../images/beskeder1.png'),
				img4:require('../../../images/indstillinger_ph.png'),
				
				font1: '#888',
				font2: '#888',
				font3: 'rgb(75, 177, 49)',
				font4: '#888',
			});
		}else if(flag == 4){
			this.setState({
				img1:require('../../../images/opretnyt_ph.png'),
				img2:require('../../../images/lavliste_ph.png'),
				img3:require('../../../images/beskeder.png'),
				img4:require('../../../images/indstillinger_ph1.png'),
				
				font1: '#888',
				font2: '#888',
				font3: '#888',
				font4: 'rgb(75, 177, 49)',
			});
		}
    }
    componentDidMount() {
        globalHomeNav.navigator = this._navigator;

    }
	constructor(props){
		super(props);
		this.state={showView: false, 
			img1:require('../../../images/opretnyt_ph1.png'),
			img2:require('../../../images/lavliste_ph.png'),
			img3:require('../../../images/beskeder.png'),
			img4:require('../../../images/indstillinger_ph.png'),
			
			font1: 'rgb(75, 177, 49)',
			font2: '#888',
			font3: '#888',
			font4: '#888',
		};
	}
	
	toggleView() {
		this.setState({showView: !this.state.showView});
	}
	
    render() {
		var  view = <View style={styles.filterbox}>
						<View style={{height:12}}>
							<View style={styles.arrow} />
						</View>
						<View style={{backgroundColor:'white', borderRadius:3}}>
							<View style={{alignItems: 'center', padding:5}}>
								<Text style={{color:'black', fontSize:20}}>G r u p p e r</Text>
							</View>
							<View style={[styles.filterbox_view,{ marginTop:15}]}>
								<Text style={{color:'black', fontSize:20}}>K o k k e n e t</Text>
							</View>
							<View style={styles.filterbox_view}>
								<Text style={{color:'black', fontSize:20}}>P e l s e</Text>
							</View>
							<View style={styles.filterbox_view}>
								<Text style={{color:'black', fontSize:20}}>V a r k t o j</Text>
							</View>
							<View style={[styles.filterbox_view,{marginBottom:60}]}>
								<Text style={{color:'black', fontSize:20}}>M o b l e r</Text>
							</View>
						</View>
					</View>
		
        return (
			<View style={styles.container}>
				
				<View style={styles.headerContainer}>
					<Image style={styles.headerLogo} source={require('../../../images/logo_black_1600.png')}/>
					<TouchableOpacity style={styles.filterBtn}  onPress={ () => this.toggleView() }>
						<Image style={styles.filterIco} source={require('../../../images/Filter_icon.png')}/>
					</TouchableOpacity>
					
				</View>
			
                <View style={{flex:0.92,}}>
                    <View style={{flex:1,backgroundColor:'green'}}>
                    <Navigator
						ref={(ref) => this._navigator = ref}
						configureScene={(route) => {
							return Navigator.SceneConfigs.FloatFromRight;
						}}
						initialRoute={{id:  'oversight' }}
						renderScene={this.renderScene}
                    />
                   </View>
                </View>
		        <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => this.navigateToInHome('oversight', 1)} style={styles.footBtn}>
						<View style={{justifyContent: 'center',	alignItems: 'center',}}>
						<Image style={styles.btnImg} source={this.state.img1}/>
						<Text style={{fontSize:12, color:this.state.font1}}>Opret nyt</Text>
						</View>
				    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateToInHome('lavliste', 2)} style={styles.footBtn}>
						<View style={{justifyContent: 'center',	alignItems: 'center',}}>
						<Image style={styles.btnImg} source={this.state.img2}/>
						<Text style={{fontSize:12, color:this.state.font2}}>Lav Liste</Text>
						</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateToInHome('beskeder', 3)} style={styles.footBtn}>
						<View style={{justifyContent: 'center',	alignItems: 'center',}}>
						<Image style={styles.btnImg} source={this.state.img3}/>
						<Text style={{fontSize:12, color:this.state.font3}}>Beskeder</Text>
						</View>
					</TouchableOpacity>
                    <TouchableOpacity onPress={() => this.navigateToInHome('indst', 4)} style={styles.footBtn}>
						<View style={{justifyContent: 'center',	alignItems: 'center',}}>
						<Image style={styles.btnImg} source={this.state.img4}/>
						<Text style={{fontSize:12, color:this.state.font4}}>Indistilinger</Text>
						</View>
					</TouchableOpacity>
				</View>
				{this.state.showView && view}
			</View>
			
			
        )
    }
    renderScene(route, navigator) {
		console.log(route.id);
		console.log("home dsfdsf");
        switch (route.id) {
            case 'oversight':
                return <OverSight navigator={navigator} />;
			case 'lavliste':
                return <Lavliste navigator={navigator} />;
			case 'beskeder':
                return <Beskeder navigator={navigator} />;
			case 'indst':
                return <Indst navigator={navigator} />;
			case 'galleryimg':
                return <GalleryImg navigator={navigator} />;
            default :
                return <OverSight navigator={navigator} />;
        }
    }
}

function bindAction(dispatch) {
    return {        
		pushNewRoute:(route)=>dispatch(pushNewRoute(route)),
		pushNewRouteHome:(route)=>dispatch(pushNewRouteHome(route)),

    }
}

export default connect(null, bindAction)(Home);


