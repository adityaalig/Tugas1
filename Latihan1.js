// App.js
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.card}>
        
        {/* Judul */}
        <Text style={styles.judul}>PROFIL MAHASISWA</Text>

        {/* Isi Profil */}
        <View style={styles.infoContainer}>
          <Text style={styles.text}>Nama       : Aditya Aryobima</Text>
          <Text style={styles.text}>NIM          : 2410501002</Text>
          <Text style={styles.text}>Prodi        : D3 Sistem Informasi</Text>
          <Text style={styles.text}>Angkatan : 2024</Text>
        </View>

        {/* Counter */}
        <Text style={styles.counter}>
          Tombol Sapa ditekan: {count} kali
        </Text>

        {/* Tombol Sapa */}
        <View style={styles.buttonContainer}>
          <Button
            title="SAPA SAYA"
            color="#000000"
            onPress={() => setCount(count + 1)}
          />
        </View>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f0f0f0', 
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#f4f4f4',
    borderWidth: 1.5,
    borderColor: '#000',
    borderStyle: 'dashed',
    padding: 20,
  },
  judul: {
    fontSize: 18,
    textAlign: 'center', 
    marginBottom: 30,
    fontFamily: 'serif',
  },
  infoContainer: {
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 6,
    fontFamily: 'serif',
  },
  counter: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: 'serif',
  },
  buttonContainer: {
    alignItems: 'flex-start', // tombol ada di kiri 
  }
});