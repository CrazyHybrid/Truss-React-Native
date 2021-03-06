'use strict';

import AppNavigator from './AppNavigator';
import React,{ Component } from "react";
import { StyleSheet, AppState, Dimensions, Image } from 'react-native';

import { Container, Header, Title, Content, Text, Button, Icon, List, ListItem, View } from 'native-base';
import Modal from 'react-native-modalbox';
import theme from './themes/base-theme';

var height = Dimensions.get('window').height;
let styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
    },
    box: {
        padding: 10,
        backgroundColor: 'transparent',
        flex: 1,
        height: height-70
    },
    space: {
        marginTop: 10,
        marginBottom: 10,
        justifyContent: 'center'
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal1: {
        height: 300

    },
    modal2: {
        height: height-78,
        position: 'relative',
        justifyContent: 'center',
    },
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDownloadingModal: false,
            showInstalling: false,
            downloadProgress: 0
        }
    }

    componentDidMount() {
        
       
    }

    render() {       
            return(
                <AppNavigator store={this.props.store} />
            );
    }
}

export default App
