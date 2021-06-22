import React,{Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Regform from './App/components/Regform';

export default class App extends React.Component
{
  render(){
    return(
      <View style={styles.container}>
       <Regform/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#88a092',
    paddingLeft: 60,
    paddingRight: 60,
  },
});