
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash/core';
import {  Platform, StatusBar } from 'react-native';
import { popRoute } from './actions/route';
import Navigator from 'Navigator';

import Home from './components/home/';
import Loginpage from './components/login/';
import NewGroup from './components/newgroup/';

import { statusBarColor } from "./themes/base-theme";

export var globalNav = {};

const searchResultRegexp = /^search\/(.*)$/;



class AppNavigator extends Component {
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        globalNav.navigator = this._navigator;   
        
    }
    popRoute() {
        this.props.popRoute();
    }   
    render() {
        return (          
			<Navigator
				ref={(ref) => this._navigator = ref}
				configureScene={(route) => {
					return Navigator.SceneConfigs.FloatFromLeft;
				}}
				initialRoute={{id:  'loginpage' }}
				renderScene={this.renderScene}
			  />
            
        );
    }

    renderScene(route, navigator) {
        switch (route.id) {
            case 'home':
                return <Home navigator={navigator} />;
			case 'loginpage':
                return <Loginpage navigator={navigator} />;
			case 'newgroup':
                return <NewGroup navigator={navigator} />;
			
            
            default :
                return <Home navigator={navigator} />;
        }
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: () => dispatch(closeDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

/**
const mapStateToProps = (state) => {
    return {
        drawerState: state.drawer.drawerState
    }
}
**/
export default connect(null, bindAction) (AppNavigator);
