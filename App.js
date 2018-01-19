/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Door from './components/Door';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  sendText(doors) {
    alert(doors);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.leftSide}>
          <Door color='#41BEB8' name='driver_front' sendText={this.sendText}/>
          <Door color='#F0AC36' name='passenger_front' sendText={this.sendText}/>
        </View>
        <View style={styles.rightSide}>
          <Door color='#5C66AD' name='driver_rear' sendText={this.sendText}/>
          <Door color='#F27630' name='passenger_rear' sendText={this.sendText}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  leftSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightSide: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});
