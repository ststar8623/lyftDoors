import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  TouchableHighlight
} from 'react-native';
import Door from '../door/Door';
import PhoneInput from '../phoneInput/PhoneInput';
import Communications from 'react-native-communications';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '14153004208',
      openOrClose: {
        'driver_front': false,
        'passenger_front': false,
        'driver_rear': false,
        'passenger_rear': false
      },
      doors: []
    }
  }

  onChangeNumber= (phone) => {
    this.setState({
      phone
    })
  }

  chooseDoor = (door) => {
    this.setState({
      openOrClose: {
        [`${door}`]: !this.state.openOrClose[door]
      }
    });
    this.state.doors.push(door);
  }

  sendSms() {
    let msg = 'Please_come_in_from_' + this.state.doors.join('_and_') + '_side';
    Communications.text(this.state.phone, msg);
    this.setState({
      doors: []
    })
  }

  render() {
    let driverRear = <Text style={styles.selectedDoor}>{this.state.openOrClose['driver_rear'] ? 'Driver Rear' : ''}</Text>;
    let passengerFront = <Text style={styles.selectedDoor}>{this.state.openOrClose['passenger_front'] ? 'Passenger Front' : ''}</Text>;
    let passengerRear = <Text style={styles.selectedDoor}>{this.state.openOrClose['passenger_rear'] ? 'Passenger Rear' : ''}</Text>;

    return (
      <View style={styles.container}>
        <PhoneInput onChange={this.onChangeNumber} number={this.state.phone}/>
        <View style={styles.leftSide}>
          <TouchableHighlight activeOpacity={100} style={{borderRadius: 100, width: 200, height: 200, backgroundColor: '#41BEB8'}}>
            <Text style={{flex: 1, textAlign: 'center', fontSize: 30, fontWeight: 'bold', color: 'white', paddingTop: 65}}>Your Lyft Driver</Text>
          </TouchableHighlight>
          <Door color='#F0AC36' name='passenger_front' chooseDoor={this.chooseDoor}/>
        </View>
        <View style={styles.rightSide}>
          <Door color='#5C66AD' name='driver_rear' chooseDoor={this.chooseDoor}/>
          <Door color='#F27630' name='passenger_rear' chooseDoor={this.chooseDoor}/>
        </View>
        <View style={{flex: 1}}>
          { passengerFront }
          { driverRear }
          { passengerRear }
        </View>
        <Button style={styles.button} title='Send' onPress={this.sendSms.bind(this)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
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
    fontSize: 20,
    color: 'white',
  },
  button: {
    flex: 1,
  }
});
