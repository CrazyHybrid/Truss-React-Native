
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
  ScrollView,
  TouchableHighlight
} from 'react-native';

export var globalNav = {};

import Navigator from 'Navigator';

import myTheme from '../../themes/base-theme';
import styles from './styles';


import OverSight from '../oversight/'
class Home extends Component {
   
    navigateTo(route) {
        this.props.pushNewRoute(route);
    }
    componentDidMount() {
        globalNav.navigator = this._navigator;

    }
    render() {
        return (
           <View style={styles.container}>
		     <View style={styles.headerContainer}>
                <Image style={styles.headerLogo} source={require('../../../images/logo_black_1600.png')}/>
                <TouchableOpacity style={styles.filterBtn}><Image style={styles.filterIco} source={require('../../../images/Filter_icon.png')}/></TouchableOpacity>
            </View>
               <View style={{flex:0.9,}}>
                  <View>
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
                  <TouchableOpacity style={styles.footBtn}><View><Image style={styles.btnImg} source={require('../../../images/oversight.png')}/></View></TouchableOpacity>
                  <TouchableOpacity style={styles.footBtn}><View><Image style={styles.btnImg} source={require('../../../images/opretnyt.png')}/></View></TouchableOpacity>
                  <TouchableOpacity style={styles.footBtn}><View><Image style={styles.btnImg} source={require('../../../images/lavlist_pa.png')}/></View></TouchableOpacity>
                  <TouchableOpacity style={styles.footBtn}><View><Image style={styles.btnImg} source={require('../../../images/beskeder.png')}/></View></TouchableOpacity>
                  <TouchableOpacity style={styles.footBtn}><View><Image style={styles.btnImg} source={require('../../../images/indstillinger_ph.png')}/></View></TouchableOpacity>

               </View>
		     </View>
        )
    }
    renderScene(route, navigator) {
        switch (route.id) {
            case 'oversight':
                return <OverSight navigator={navigator} />;
            default :
                return <OverSight navigator={navigator} />;
        }
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
		pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindAction)(Home);





