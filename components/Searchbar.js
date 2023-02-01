import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function Searchbar() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchINput} placeholder="Input City....." />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: '50%',
    backgroundColor: '#6E7379',
    borderRadius: 8,
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    margin: 8,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  searchINput: {
    width: '100%',
    height: '100%',
    paddingLeft: 8,
    fontSize: 20,
  },
});
