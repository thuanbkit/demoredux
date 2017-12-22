import React,{Component} from 'react';
import {View,StyleSheet} from 'react-native';
import ComC from './ComC';
export default class ComB extends Component<{}> {
    clickB() {
        this.refs.mrC.doimau();
    }
    render(){
        return(
            <View style={styles.comB}>
                <ComC ref="mrC" />
            </View>

        )

    }
}
const styles = StyleSheet.create({
    comB: {
        height:200,
        width:200,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    }
});