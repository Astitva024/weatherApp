/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Weather from './components/Weather';

const API_KEY = '6ed6482c83edf9358a99a30509bd4b30';

export default function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loaded, setloaded] = useState(true);
  const [val, setValue] = useState('');
  // let input = '';

  async function fetchWeatherData(cityname) {
    setloaded(false);
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=${API_KEY}`;

    try {
      const response = await fetch(API);
      if (response.status == 200) {
        const data = await response.json();
        setWeatherData(data);
      } else {
        setWeatherData(null);
      }
      setloaded(true);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    console.log(weatherData);
  }, []);
  useEffect(() => {
    {
      val == '' ? fetchWeatherData('Mumbai') : fetchWeatherData(val);
    }
    // fetchWeatherData(val);
    console.log(weatherData);
  }, []);
  // useEffect(() => {
  //   setValue(val);
  // }, []);
  if (!loaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="gray" size={36} />
      </View>
    );
  } else if (weatherData === null) {
    return <View />;
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="height"
      enabled={false}>
      <View style={styles.Main}>
        <Text style={styles.Text}>Today's-Weather</Text>
        <View style={styles.INPUT}>
          {/* <Searchbar /> */}
          <View style={styles.container1}>
            <TextInput
              style={styles.searchINput}
              placeholder="Input City....."
              Value={val}
              onChangeText={input => setValue(input)}
            />
          </View>
          <View style={styles.Click}>
            <TouchableOpacity onPress={() => fetchWeatherData(val)}>
              <View style={styles.Addwrapper}>
                <Text style={styles.addText}>GO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.Model}>
        {/* <Hardcoded /> */}
        <Weather weatherData={weatherData} />
      </View>
      <View
        style={{
          flex: 0.1,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#555452',
            margin: 15,
            fontSize: 15,
          }}>
          copyright @ Astitva.Shrivastava
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  container1: {
    width: '80%',
    height: '50%',
    backgroundColor: '#6E7379',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    margin: 8,

    borderBottomStartRadius: 25,
  },
  Main: {
    width: '100%',
    height: '15%',
    backgroundColor: '#444949',
    flex: 0.25,
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  Text: {
    fontSize: 38,
    fontWeight: '600',
    color: 'white',
    margin: 10,
  },
  Model: {
    flex: 0.65,
    width: '95%',
    backgroundColor: '#2B80E1',
    height: '62%',
    margin: 9,
    borderRadius: 25,
    marginTop: 25,
    elevation: 25,
    shadowColor: 'white',
    shadowOpacity: 1,
  },
  INPUT: {
    height: '60%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  searchINput: {
    width: '50%',
    height: '100%',
    paddingLeft: 10,
    fontSize: 20,
    color: 'white',
    justifyContent: 'flex-start',
    alignContent: 'flex-end',
  },
  Addwrapper: {
    width: 55,
    height: 62,
    backgroundColor: '#6E7379',
    marginEnd: 10,
    marginBottom: 8,
    alignItems: 'center',
    justifyContent: 'center',

    elevation: 6,
    borderTopEndRadius: 7,
    borderTopStartRadius: 7,
    borderBottomStartRadius: 7,
    borderBottomEndRadius: 25,
  },
  addText: {
    fontWeight: '500',
    fontSize: 28,
    color: '#6E7276 ',
  },
  Click: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});
