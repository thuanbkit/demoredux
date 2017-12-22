import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
export default class ComC extends Component{
    constructor(props) {
        super(props);
        this.state= {mau:'yellow'}
    }
    doimau() {
        if (this.state.mau == 'yellow') {
            this.setState({mau:'black'});
        } else {
            this.setState({mau:'yellow'});
        }
    }
    render() {
        return(
            <View style={{ width:100,height:100,backgroundColor:this.state.mau}}></View>
        );
    }
}
