import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import ComB from './ComB';
export default class ComA extends Component<{}> {
    clickA() {
        this.refs.mrB.clickB();
    }
    render(){
        return(
            <View style={styles.comA}>
                <ComB ref="mrB" />
            </View>

        )

    }
};
const styles = StyleSheet.create({
    comA: {
        height:300,
        width:300,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    }
});