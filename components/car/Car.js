import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import Door from '../door/Door';
import PhoneInput from '../phoneInput/PhoneInput';
import Communications from 'react-native-communications';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '14153004208',
      // doors: false
    }
  }

  onChangeNumber(phone) {
    this.setState({
      phone
    })
  }

  chooseDoor(door) {
    let msg = 'Please_come_in_from_' + door + '_side';
    Communications.text('14153004208', msg);
  }

  // sendSms() {
  //   Communications.text(this.state.phone);
  // }

  render() {
    // let openOrClose = this.state.doors ? 'black' : '#41BEB8';
    return (
      <View style={styles.container}>
        <PhoneInput onChange={this.onChangeNumber} number={this.state.phone}/>
        <View style={styles.leftSide}>
          <Door color='#41BEB8' name='driver_front' chooseDoor={this.chooseDoor}/>
          <Door color='#F0AC36' name='passenger_front' chooseDoor={this.chooseDoor}/>
        </View>
        <View style={styles.rightSide}>
          <Door color='#5C66AD' name='driver_rear' chooseDoor={this.chooseDoor}/>
          <Door color='#F27630' name='passenger_rear' chooseDoor={this.chooseDoor}/>
        </View>
        {/* <Text style={styles.selectedDoor}>{this.state.doors}</Text> */}
        {/* <Button style={styles.button} title='Send' onPress={this.sendSms.bind(this)}/> */}
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
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  rightSide: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  selectedDoor: {
    flex: 1,
    backgroundColor: 'black',
    // textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
  button: {
    flex: 1,
  }
});
