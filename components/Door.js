import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
// import Box from './components/Box';

export default class Door extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      <View style={{width: 200, height: 200, backgroundColor: this.props.color}}>
        <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>{ this.props.name }</Text>
        <Button title='Send' onPress={this.props.sendText.bind(this, this.props.name)}/>
      </View>
    );
  }
};

// skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => LyftLineAhead);
