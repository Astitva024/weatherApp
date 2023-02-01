import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// interface Props {
//   name: String;
// }
const Weather = ({weatherData}) => {
  return (
    <View style={styles.cont}>
      <Text style={styles.text}>{weatherData.name}</Text>
      <Text style={styles.WETH}>{weatherData.weather[0].main}</Text>
      <Text style={styles.degree}>{weatherData.main.temp} °C</Text>
      <View style={styles.HUmid}>
        <Text style={styles.HUMI}>
          Humidity : {weatherData.main.humidity} %
        </Text>
      </View>
      <View style={styles.humid}>
        <Text style={styles.HUMI}>
          WindSpeed : {weatherData.wind.speed} m/s
        </Text>
      </View>
    </View>
  );
};

export default Weather;
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
