import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function Hardcoded({weatherData}) {
  return (
    <View style={styles.cont}>
      <Text style={styles.text}>Mumbai</Text>
      <Text style={styles.WETH}>Sunshine</Text>
      <Text style={styles.degree}>28 °C</Text>
      <View style={styles.HUmid}>
        <Text style={styles.HUMI}>Humidity : 45 %</Text>
      </View>
      <View style={styles.humid}>
        <Text style={styles.HUMI}>WindSpeed : 15 m/s</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  cont: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 50,
    fontWeight: '400',
    margin: 20,
  },
  WETH: {
    fontSize: 30,
    color: '#9ABCE2',
  },
  degree: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 35,
    marginBottom: 14,
  },
  HUMI: {
    fontSize: 30,
    color: 'white',
    fontWeight: '300',
  },
  humid: {
    backgroundColor: '#00000065',
    width: '95%',
    height: '15%',
    borderRadius: 15,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HUmid: {
    backgroundColor: '#00000065',
    width: '95%',
    height: '15%',
    borderRadius: 15,
    marginLeft: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
  },
});
