import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class PhoneInput extends Component {
  render() {
    return (
      <View style={styles.phone}>
        <Text style={styles.phoneTitle}>Phone Number</Text>
        <TextInput onChangeText={this.props.onChange} style={styles.phoneInput} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  phone: {
    flex: 1,
  },
  phoneTitle: {
    marginTop: 50,
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
  phoneInput: {
    height: 40,
    width: 200,
    backgroundColor: 'gray',
  }
})