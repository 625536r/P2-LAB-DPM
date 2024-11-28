import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Teknik Informatika</Text>

      {/* Dua kotak dengan properti flexbox */}
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
    backgroundColor: '#D3D3D3', // Latar belakang abu-abu terang
    justifyContent: 'center', // Memusatkan isi secara vertikal
    alignItems: 'center', // Memusatkan isi secara horizontal
  },
  text: {
    fontSize: 24,
    color: 'blue', // Warna teks biru
    fontWeight: 'bold', // Gaya teks tebal
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row', // Membuat tata letak horizontal
    justifyContent: 'space-between', // Jarak merata di antara kotak
    width: '80%', // Mengatur lebar container untuk jarak horizontal
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'red', // Warna kotak 1
  },
  box2: {
    backgroundColor: 'green', // Warna kotak 2
  },
});

export default App;
