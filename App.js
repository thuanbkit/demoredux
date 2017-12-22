/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity} from 'react-native';
import ComA from './component/ComA';

export default class App extends Component<{}> {
  render() {
    return (
        <View>
            <TouchableOpacity onPress={()=>{
                this.refs.coma.clickA();
            }}>
                <Text style={{textAlign:'center',marginTop:100,fontSize:24}}>Touch Here</Text>
            </TouchableOpacity>
            <View style={styles.container}>
              <ComA ref="coma" />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        justifyContent:'center',
        alignItems:'center',
        margin:20

    }
});
