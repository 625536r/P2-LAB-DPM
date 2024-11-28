import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.text}>Teknik Informatika</Text>

      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.box1]} />
        <View style={[styles.box, styles.box2]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  text: {
    fontSize: 24,
    color: 'blue', 
    fontWeight: 'bold', 
    marginBottom: 20, 
  },
  boxContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    width: '80%', 
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'black', 
  },
  box2: {
    backgroundColor: 'white', 
  },
});

export default App;
