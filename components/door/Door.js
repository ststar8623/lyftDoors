import React, { Component } from 'react';
import { View, Text, Button, TouchableHighlight } from 'react-native';

export default class Door extends Component {
  render() {
    return (
      <TouchableHighlight activeOpacity={100} style={{width: 200, height: 200, backgroundColor: this.props.color}} onPress={this.props.chooseDoor.bind(this, this.props.name)}>
        <Text style={{flex: 1, textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: 'white', paddingTop: 75}}>{ this.props.name }</Text>
      </TouchableHighlight>
    );
  }
};